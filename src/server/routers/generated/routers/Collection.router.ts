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

        aggregate: procedure.input($Schema.CollectionInputSchema.aggregate).query(({ ctx, input }) => checkRead(db(ctx).collection.aggregate(input as any))),

        createMany: procedure.input($Schema.CollectionInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).collection.createMany(input as any))),

        create: procedure.input($Schema.CollectionInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).collection.create(input as any))),

        deleteMany: procedure.input($Schema.CollectionInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).collection.deleteMany(input as any))),

        delete: procedure.input($Schema.CollectionInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).collection.delete(input as any))),

        findFirst: procedure.input($Schema.CollectionInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).collection.findFirst(input as any))),

        findFirstOrThrow: procedure.input($Schema.CollectionInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).collection.findFirstOrThrow(input as any))),

        findMany: procedure.input($Schema.CollectionInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).collection.findMany(input as any))),

        findUnique: procedure.input($Schema.CollectionInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).collection.findUnique(input as any))),

        findUniqueOrThrow: procedure.input($Schema.CollectionInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).collection.findUniqueOrThrow(input as any))),

        groupBy: procedure.input($Schema.CollectionInputSchema.groupBy).query(({ ctx, input }) => checkRead(db(ctx).collection.groupBy(input as any))),

        updateMany: procedure.input($Schema.CollectionInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).collection.updateMany(input as any))),

        update: procedure.input($Schema.CollectionInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).collection.update(input as any))),

        upsert: procedure.input($Schema.CollectionInputSchema.upsert).mutation(async ({ ctx, input }) => checkMutate(db(ctx).collection.upsert(input as any))),

        count: procedure.input($Schema.CollectionInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).collection.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    aggregate: {

        useQuery: <T extends Prisma.CollectionAggregateArgs, TData = Prisma.GetCollectionAggregateType<T>>(
            input: Prisma.Subset<T, Prisma.CollectionAggregateArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.GetCollectionAggregateType<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.CollectionAggregateArgs>(
            input: Omit<Prisma.Subset<T, Prisma.CollectionAggregateArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.GetCollectionAggregateType<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.GetCollectionAggregateType<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    createMany: {

        useMutation: <T extends Prisma.CollectionCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.CollectionCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.CollectionCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.CollectionCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.CollectionCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.CollectionCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.CollectionGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.CollectionGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.CollectionCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.CollectionCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.CollectionGetPayload<T>, Context>) => Promise<Prisma.CollectionGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.CollectionDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.CollectionDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.CollectionDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.CollectionDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.CollectionDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.CollectionDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.CollectionGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.CollectionGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.CollectionDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.CollectionDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.CollectionGetPayload<T>, Context>) => Promise<Prisma.CollectionGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.CollectionFindFirstArgs, TData = Prisma.CollectionGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.CollectionFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.CollectionGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.CollectionFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.CollectionFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.CollectionGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.CollectionGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findFirstOrThrow: {

        useQuery: <T extends Prisma.CollectionFindFirstOrThrowArgs, TData = Prisma.CollectionGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.CollectionFindFirstOrThrowArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.CollectionGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.CollectionFindFirstOrThrowArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.CollectionFindFirstOrThrowArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.CollectionGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.CollectionGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.CollectionFindManyArgs, TData = Array<Prisma.CollectionGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.CollectionFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.CollectionGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.CollectionFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.CollectionFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.CollectionGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.CollectionGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.CollectionFindUniqueArgs, TData = Prisma.CollectionGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.CollectionFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.CollectionGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.CollectionFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.CollectionFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.CollectionGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.CollectionGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUniqueOrThrow: {

        useQuery: <T extends Prisma.CollectionFindUniqueOrThrowArgs, TData = Prisma.CollectionGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.CollectionFindUniqueOrThrowArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.CollectionGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.CollectionFindUniqueOrThrowArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.CollectionFindUniqueOrThrowArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.CollectionGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.CollectionGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    groupBy: {

        useQuery: <T extends Prisma.CollectionGroupByArgs,
            HasSelectOrTake extends Prisma.Or<
                Prisma.Extends<'skip', Prisma.Keys<T>>,
                Prisma.Extends<'take', Prisma.Keys<T>>
            >,
            OrderByArg extends Prisma.True extends HasSelectOrTake
            ? { orderBy: Prisma.CollectionGroupByArgs['orderBy'] }
            : { orderBy?: Prisma.CollectionGroupByArgs['orderBy'] },
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
            , TData = {} extends InputErrors ? Prisma.GetCollectionGroupByPayload<T> : InputErrors>(
                input: Prisma.SubsetIntersection<T, Prisma.CollectionGroupByArgs, OrderByArg> & InputErrors,
                opts?: UseTRPCQueryOptions<string, T, {} extends InputErrors ? Prisma.GetCollectionGroupByPayload<T> : InputErrors, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.CollectionGroupByArgs,
            HasSelectOrTake extends Prisma.Or<
                Prisma.Extends<'skip', Prisma.Keys<T>>,
                Prisma.Extends<'take', Prisma.Keys<T>>
            >,
            OrderByArg extends Prisma.True extends HasSelectOrTake
            ? { orderBy: Prisma.CollectionGroupByArgs['orderBy'] }
            : { orderBy?: Prisma.CollectionGroupByArgs['orderBy'] },
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
            input: Omit<Prisma.SubsetIntersection<T, Prisma.CollectionGroupByArgs, OrderByArg> & InputErrors, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, {} extends InputErrors ? Prisma.GetCollectionGroupByPayload<T> : InputErrors, Error>
        ) => UseTRPCInfiniteQueryResult<
            {} extends InputErrors ? Prisma.GetCollectionGroupByPayload<T> : InputErrors,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.CollectionUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.CollectionUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.CollectionUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.CollectionUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.CollectionUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.CollectionUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.CollectionGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.CollectionGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.CollectionUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.CollectionUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.CollectionGetPayload<T>, Context>) => Promise<Prisma.CollectionGetPayload<T>>
            };

    };
    upsert: {

        useMutation: <T extends Prisma.CollectionUpsertArgs>(opts?: UseTRPCMutationOptions<
            Prisma.CollectionUpsertArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.CollectionGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.CollectionGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.CollectionUpsertArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.CollectionUpsertArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.CollectionGetPayload<T>, Context>) => Promise<Prisma.CollectionGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.CollectionCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.CollectionCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.CollectionCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.CollectionCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.CollectionCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.CollectionCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.CollectionCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.CollectionCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
