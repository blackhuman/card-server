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

        aggregate: procedure.input($Schema.ConversationInputSchema.aggregate).query(({ ctx, input }) => checkRead(db(ctx).conversation.aggregate(input as any))),

        createMany: procedure.input($Schema.ConversationInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).conversation.createMany(input as any))),

        create: procedure.input($Schema.ConversationInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).conversation.create(input as any))),

        deleteMany: procedure.input($Schema.ConversationInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).conversation.deleteMany(input as any))),

        delete: procedure.input($Schema.ConversationInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).conversation.delete(input as any))),

        findFirst: procedure.input($Schema.ConversationInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).conversation.findFirst(input as any))),

        findFirstOrThrow: procedure.input($Schema.ConversationInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).conversation.findFirstOrThrow(input as any))),

        findMany: procedure.input($Schema.ConversationInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).conversation.findMany(input as any))),

        findUnique: procedure.input($Schema.ConversationInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).conversation.findUnique(input as any))),

        findUniqueOrThrow: procedure.input($Schema.ConversationInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).conversation.findUniqueOrThrow(input as any))),

        groupBy: procedure.input($Schema.ConversationInputSchema.groupBy).query(({ ctx, input }) => checkRead(db(ctx).conversation.groupBy(input as any))),

        updateMany: procedure.input($Schema.ConversationInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).conversation.updateMany(input as any))),

        update: procedure.input($Schema.ConversationInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).conversation.update(input as any))),

        upsert: procedure.input($Schema.ConversationInputSchema.upsert).mutation(async ({ ctx, input }) => checkMutate(db(ctx).conversation.upsert(input as any))),

        count: procedure.input($Schema.ConversationInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).conversation.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    aggregate: {

        useQuery: <T extends Prisma.ConversationAggregateArgs, TData = Prisma.GetConversationAggregateType<T>>(
            input: Prisma.Subset<T, Prisma.ConversationAggregateArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.GetConversationAggregateType<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ConversationAggregateArgs>(
            input: Omit<Prisma.Subset<T, Prisma.ConversationAggregateArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.GetConversationAggregateType<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.GetConversationAggregateType<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    createMany: {

        useMutation: <T extends Prisma.ConversationCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ConversationCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ConversationCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ConversationCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.ConversationCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ConversationCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ConversationGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ConversationGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ConversationCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ConversationCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ConversationGetPayload<T>, Context>) => Promise<Prisma.ConversationGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.ConversationDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ConversationDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ConversationDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ConversationDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.ConversationDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ConversationDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ConversationGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ConversationGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ConversationDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ConversationDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ConversationGetPayload<T>, Context>) => Promise<Prisma.ConversationGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.ConversationFindFirstArgs, TData = Prisma.ConversationGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.ConversationFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ConversationGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ConversationFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.ConversationFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ConversationGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.ConversationGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findFirstOrThrow: {

        useQuery: <T extends Prisma.ConversationFindFirstOrThrowArgs, TData = Prisma.ConversationGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.ConversationFindFirstOrThrowArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ConversationGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ConversationFindFirstOrThrowArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.ConversationFindFirstOrThrowArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ConversationGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.ConversationGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.ConversationFindManyArgs, TData = Array<Prisma.ConversationGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.ConversationFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.ConversationGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ConversationFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.ConversationFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.ConversationGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.ConversationGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.ConversationFindUniqueArgs, TData = Prisma.ConversationGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.ConversationFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ConversationGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ConversationFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ConversationFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ConversationGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.ConversationGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUniqueOrThrow: {

        useQuery: <T extends Prisma.ConversationFindUniqueOrThrowArgs, TData = Prisma.ConversationGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.ConversationFindUniqueOrThrowArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ConversationGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ConversationFindUniqueOrThrowArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ConversationFindUniqueOrThrowArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ConversationGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.ConversationGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    groupBy: {

        useQuery: <T extends Prisma.ConversationGroupByArgs,
            HasSelectOrTake extends Prisma.Or<
                Prisma.Extends<'skip', Prisma.Keys<T>>,
                Prisma.Extends<'take', Prisma.Keys<T>>
            >,
            OrderByArg extends Prisma.True extends HasSelectOrTake
            ? { orderBy: Prisma.ConversationGroupByArgs['orderBy'] }
            : { orderBy?: Prisma.ConversationGroupByArgs['orderBy'] },
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
            , TData = {} extends InputErrors ? Prisma.GetConversationGroupByPayload<T> : InputErrors>(
                input: Prisma.SubsetIntersection<T, Prisma.ConversationGroupByArgs, OrderByArg> & InputErrors,
                opts?: UseTRPCQueryOptions<string, T, {} extends InputErrors ? Prisma.GetConversationGroupByPayload<T> : InputErrors, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.ConversationGroupByArgs,
            HasSelectOrTake extends Prisma.Or<
                Prisma.Extends<'skip', Prisma.Keys<T>>,
                Prisma.Extends<'take', Prisma.Keys<T>>
            >,
            OrderByArg extends Prisma.True extends HasSelectOrTake
            ? { orderBy: Prisma.ConversationGroupByArgs['orderBy'] }
            : { orderBy?: Prisma.ConversationGroupByArgs['orderBy'] },
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
            input: Omit<Prisma.SubsetIntersection<T, Prisma.ConversationGroupByArgs, OrderByArg> & InputErrors, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, {} extends InputErrors ? Prisma.GetConversationGroupByPayload<T> : InputErrors, Error>
        ) => UseTRPCInfiniteQueryResult<
            {} extends InputErrors ? Prisma.GetConversationGroupByPayload<T> : InputErrors,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.ConversationUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ConversationUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ConversationUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ConversationUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.ConversationUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ConversationUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ConversationGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ConversationGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ConversationUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ConversationUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ConversationGetPayload<T>, Context>) => Promise<Prisma.ConversationGetPayload<T>>
            };

    };
    upsert: {

        useMutation: <T extends Prisma.ConversationUpsertArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ConversationUpsertArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ConversationGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ConversationGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ConversationUpsertArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ConversationUpsertArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ConversationGetPayload<T>, Context>) => Promise<Prisma.ConversationGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.ConversationCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.ConversationCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.ConversationCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.ConversationCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.ConversationCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.ConversationCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.ConversationCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.ConversationCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
