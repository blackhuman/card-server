/* eslint-disable */
import type { unsetMarker, AnyRouter, AnyRootConfig, CreateRouterInner, Procedure, ProcedureBuilder, ProcedureParams, ProcedureRouterRecord, ProcedureType } from "@trpc/server";
import type { PrismaClient } from "@zenstackhq/runtime/models";
import createCardRouter from "./Card.router";
import createArticleRouter from "./Article.router";
import createConversationRouter from "./Conversation.router";
import createUserRouter from "./User.router";
import { ClientType as CardClientType } from "./Card.router";
import { ClientType as ArticleClientType } from "./Article.router";
import { ClientType as ConversationClientType } from "./Conversation.router";
import { ClientType as UserClientType } from "./User.router";

export type BaseConfig = AnyRootConfig;

export type RouterFactory<Config extends BaseConfig> = <
    ProcRouterRecord extends ProcedureRouterRecord
>(
    procedures: ProcRouterRecord
) => CreateRouterInner<Config, ProcRouterRecord>;

export type UnsetMarker = typeof unsetMarker;

export type ProcBuilder<Config extends BaseConfig> = ProcedureBuilder<
    ProcedureParams<Config, any, any, any, UnsetMarker, UnsetMarker, any>
>;

export function db(ctx: any) {
    if (!ctx.prisma) {
        throw new Error('Missing "prisma" field in trpc context');
    }
    return ctx.prisma as PrismaClient;
}

export function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({
        card: createCardRouter(router, procedure),
        article: createArticleRouter(router, procedure),
        conversation: createConversationRouter(router, procedure),
        user: createUserRouter(router, procedure),
    }
    );
}

export interface ClientType<AppRouter extends AnyRouter> {
    card: CardClientType<AppRouter>;
    article: ArticleClientType<AppRouter>;
    conversation: ConversationClientType<AppRouter>;
    user: UserClientType<AppRouter>;
}
