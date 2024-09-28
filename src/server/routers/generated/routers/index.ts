/* eslint-disable */
import type { unsetMarker, AnyRouter, AnyRootConfig, CreateRouterInner, Procedure, ProcedureBuilder, ProcedureParams, ProcedureRouterRecord, ProcedureType } from "@trpc/server";
import type { PrismaClient } from "@zenstackhq/runtime/models";
import createPostRouter from "./Post.router";
import createPhraseRouter from "./Phrase.router";
import createArticleRouter from "./Article.router";
import createCollectionRouter from "./Collection.router";
import createConversationRouter from "./Conversation.router";
import createAccountRouter from "./Account.router";
import createSessionRouter from "./Session.router";
import createUserRouter from "./User.router";
import createVerificationTokenRouter from "./VerificationToken.router";
import { ClientType as PostClientType } from "./Post.router";
import { ClientType as PhraseClientType } from "./Phrase.router";
import { ClientType as ArticleClientType } from "./Article.router";
import { ClientType as CollectionClientType } from "./Collection.router";
import { ClientType as ConversationClientType } from "./Conversation.router";
import { ClientType as AccountClientType } from "./Account.router";
import { ClientType as SessionClientType } from "./Session.router";
import { ClientType as UserClientType } from "./User.router";
import { ClientType as VerificationTokenClientType } from "./VerificationToken.router";

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
        post: createPostRouter(router, procedure),
        phrase: createPhraseRouter(router, procedure),
        article: createArticleRouter(router, procedure),
        collection: createCollectionRouter(router, procedure),
        conversation: createConversationRouter(router, procedure),
        account: createAccountRouter(router, procedure),
        session: createSessionRouter(router, procedure),
        user: createUserRouter(router, procedure),
        verificationToken: createVerificationTokenRouter(router, procedure),
    }
    );
}

export interface ClientType<AppRouter extends AnyRouter> {
    post: PostClientType<AppRouter>;
    phrase: PhraseClientType<AppRouter>;
    article: ArticleClientType<AppRouter>;
    collection: CollectionClientType<AppRouter>;
    conversation: ConversationClientType<AppRouter>;
    account: AccountClientType<AppRouter>;
    session: SessionClientType<AppRouter>;
    user: UserClientType<AppRouter>;
    verificationToken: VerificationTokenClientType<AppRouter>;
}
