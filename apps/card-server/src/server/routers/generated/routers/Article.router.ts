/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import * as _Schema from '@zenstackhq/runtime/zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';
import type { Prisma } from '@zenstackhq/runtime/models';
import type { UseTRPCMutationOptions, UseTRPCMutationResult, UseTRPCQueryOptions, UseTRPCQueryResult, UseTRPCInfiniteQueryOptions, UseTRPCInfiniteQueryResult } from '@trpc/react-query/shared';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { AnyRouter } from '@trpc/server';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        aggregate: procedure.input($Schema.ArticleInputSchema.aggregate).query(({ ctx, input }) => checkRead(db(ctx).article.aggregate(input as any))),

        createMany: procedure.input($Schema.ArticleInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).article.createMany(input as any))),

        create: procedure.input($Schema.ArticleInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).article.create(input as any))),

        deleteMany: procedure.input($Schema.ArticleInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).article.deleteMany(input as any))),

        delete: procedure.input($Schema.ArticleInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).article.delete(input as any))),

        findFirst: procedure.input($Schema.ArticleInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).article.findFirst(input as any))),

        findFirstOrThrow: procedure.input($Schema.ArticleInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).article.findFirstOrThrow(input as any))),

        findMany: procedure.input($Schema.ArticleInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).article.findMany(input as any))),

        findUnique: procedure.input($Schema.ArticleInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).article.findUnique(input as any))),

        findUniqueOrThrow: procedure.input($Schema.ArticleInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).article.findUniqueOrThrow(input as any))),

        groupBy: procedure.input($Schema.ArticleInputSchema.groupBy).query(({ ctx, input }) => checkRead(db(ctx).article.groupBy(input as any))),

        updateMany: procedure.input($Schema.ArticleInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).article.updateMany(input as any))),

        update: procedure.input($Schema.ArticleInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).article.update(input as any))),

        upsert: procedure.input($Schema.ArticleInputSchema.upsert).mutation(async ({ ctx, input }) => checkMutate(db(ctx).article.upsert(input as any))),

        count: procedure.input($Schema.ArticleInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).article.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    aggregate: {

        useQuery: <T extends Prisma.ArticleAggregateArgs, TData = Prisma.GetArticleAggregateType<T>>(
            input: Prisma.Subset<T, Prisma.ArticleAggregateArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.GetArticleAggregateType<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ArticleAggregateArgs>(
            input: Omit<Prisma.Subset<T, Prisma.ArticleAggregateArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.GetArticleAggregateType<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.GetArticleAggregateType<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    createMany: {

        useMutation: <T extends Prisma.ArticleCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ArticleCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ArticleCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ArticleCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.ArticleCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ArticleCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ArticleGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ArticleGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ArticleCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ArticleCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ArticleGetPayload<T>, Context>) => Promise<Prisma.ArticleGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.ArticleDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ArticleDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ArticleDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ArticleDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.ArticleDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ArticleDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ArticleGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ArticleGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ArticleDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ArticleDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ArticleGetPayload<T>, Context>) => Promise<Prisma.ArticleGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.ArticleFindFirstArgs, TData = Prisma.ArticleGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.ArticleFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ArticleGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ArticleFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.ArticleFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ArticleGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.ArticleGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findFirstOrThrow: {

        useQuery: <T extends Prisma.ArticleFindFirstOrThrowArgs, TData = Prisma.ArticleGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.ArticleFindFirstOrThrowArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ArticleGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ArticleFindFirstOrThrowArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.ArticleFindFirstOrThrowArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ArticleGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.ArticleGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.ArticleFindManyArgs, TData = Array<Prisma.ArticleGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.ArticleFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.ArticleGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ArticleFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.ArticleFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.ArticleGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.ArticleGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.ArticleFindUniqueArgs, TData = Prisma.ArticleGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.ArticleFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ArticleGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ArticleFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ArticleFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ArticleGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.ArticleGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUniqueOrThrow: {

        useQuery: <T extends Prisma.ArticleFindUniqueOrThrowArgs, TData = Prisma.ArticleGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.ArticleFindUniqueOrThrowArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ArticleGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ArticleFindUniqueOrThrowArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ArticleFindUniqueOrThrowArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ArticleGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.ArticleGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    groupBy: {

        useQuery: <T extends Prisma.ArticleGroupByArgs,
            HasSelectOrTake extends Prisma.Or<
                Prisma.Extends<'skip', Prisma.Keys<T>>,
                Prisma.Extends<'take', Prisma.Keys<T>>
            >,
            OrderByArg extends Prisma.True extends HasSelectOrTake
            ? { orderBy: Prisma.ArticleGroupByArgs['orderBy'] }
            : { orderBy?: Prisma.ArticleGroupByArgs['orderBy'] },
            OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>,
            ByFields extends Prisma.MaybeTupleToUnion<T['by']>,
            ByValid extends Prisma.Has<ByFields, OrderFields>,
            HavingFields extends Prisma.GetHavingFields<T['having']>,
            HavingValid extends Prisma.Has<ByFields, HavingFields>,
            ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False,
            InputErrors extends ByEmpty extends Prisma.True
            ? `Error: "by" must not be empty.`
            : HavingValid extends Prisma.False
            ? {
                [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                : [
                    Error,
                    'Field ',
                    P,
                    ` in "having" needs to be provided in "by"`,
                ]
            }[HavingFields]
            : 'take' extends Prisma.Keys<T>
            ? 'orderBy' extends Prisma.Keys<T>
            ? ByValid extends Prisma.True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
            : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Prisma.Keys<T>
            ? 'orderBy' extends Prisma.Keys<T>
            ? ByValid extends Prisma.True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
            : 'Error: If you provide "skip", you also need to provide "orderBy"'
            : ByValid extends Prisma.True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
            , TData = {} extends InputErrors ? Prisma.GetArticleGroupByPayload<T> : InputErrors>(
                input: Prisma.SubsetIntersection<T, Prisma.ArticleGroupByArgs, OrderByArg> & InputErrors,
                opts?: UseTRPCQueryOptions<string, T, {} extends InputErrors ? Prisma.GetArticleGroupByPayload<T> : InputErrors, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.ArticleGroupByArgs,
            HasSelectOrTake extends Prisma.Or<
                Prisma.Extends<'skip', Prisma.Keys<T>>,
                Prisma.Extends<'take', Prisma.Keys<T>>
            >,
            OrderByArg extends Prisma.True extends HasSelectOrTake
            ? { orderBy: Prisma.ArticleGroupByArgs['orderBy'] }
            : { orderBy?: Prisma.ArticleGroupByArgs['orderBy'] },
            OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>,
            ByFields extends Prisma.MaybeTupleToUnion<T['by']>,
            ByValid extends Prisma.Has<ByFields, OrderFields>,
            HavingFields extends Prisma.GetHavingFields<T['having']>,
            HavingValid extends Prisma.Has<ByFields, HavingFields>,
            ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False,
            InputErrors extends ByEmpty extends Prisma.True
            ? `Error: "by" must not be empty.`
            : HavingValid extends Prisma.False
            ? {
                [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                : [
                    Error,
                    'Field ',
                    P,
                    ` in "having" needs to be provided in "by"`,
                ]
            }[HavingFields]
            : 'take' extends Prisma.Keys<T>
            ? 'orderBy' extends Prisma.Keys<T>
            ? ByValid extends Prisma.True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
            : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Prisma.Keys<T>
            ? 'orderBy' extends Prisma.Keys<T>
            ? ByValid extends Prisma.True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
            : 'Error: If you provide "skip", you also need to provide "orderBy"'
            : ByValid extends Prisma.True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        >(
            input: Omit<Prisma.SubsetIntersection<T, Prisma.ArticleGroupByArgs, OrderByArg> & InputErrors, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, {} extends InputErrors ? Prisma.GetArticleGroupByPayload<T> : InputErrors, Error>
        ) => UseTRPCInfiniteQueryResult<
            {} extends InputErrors ? Prisma.GetArticleGroupByPayload<T> : InputErrors,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.ArticleUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ArticleUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ArticleUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ArticleUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.ArticleUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ArticleUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ArticleGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ArticleGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ArticleUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ArticleUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ArticleGetPayload<T>, Context>) => Promise<Prisma.ArticleGetPayload<T>>
            };

    };
    upsert: {

        useMutation: <T extends Prisma.ArticleUpsertArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ArticleUpsertArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ArticleGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ArticleGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ArticleUpsertArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ArticleUpsertArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ArticleGetPayload<T>, Context>) => Promise<Prisma.ArticleGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.ArticleCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.ArticleCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.ArticleCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.ArticleCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.ArticleCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.ArticleCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.ArticleCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.ArticleCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
