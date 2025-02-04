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

        aggregate: procedure.input($Schema.CardInputSchema.aggregate).query(({ ctx, input }) => checkRead(db(ctx).card.aggregate(input as any))),

        createMany: procedure.input($Schema.CardInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).card.createMany(input as any))),

        create: procedure.input($Schema.CardInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).card.create(input as any))),

        deleteMany: procedure.input($Schema.CardInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).card.deleteMany(input as any))),

        delete: procedure.input($Schema.CardInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).card.delete(input as any))),

        findFirst: procedure.input($Schema.CardInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).card.findFirst(input as any))),

        findFirstOrThrow: procedure.input($Schema.CardInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).card.findFirstOrThrow(input as any))),

        findMany: procedure.input($Schema.CardInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).card.findMany(input as any))),

        findUnique: procedure.input($Schema.CardInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).card.findUnique(input as any))),

        findUniqueOrThrow: procedure.input($Schema.CardInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).card.findUniqueOrThrow(input as any))),

        groupBy: procedure.input($Schema.CardInputSchema.groupBy).query(({ ctx, input }) => checkRead(db(ctx).card.groupBy(input as any))),

        updateMany: procedure.input($Schema.CardInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).card.updateMany(input as any))),

        update: procedure.input($Schema.CardInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).card.update(input as any))),

        upsert: procedure.input($Schema.CardInputSchema.upsert).mutation(async ({ ctx, input }) => checkMutate(db(ctx).card.upsert(input as any))),

        count: procedure.input($Schema.CardInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).card.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    aggregate: {

        useQuery: <T extends Prisma.CardAggregateArgs, TData = Prisma.GetCardAggregateType<T>>(
            input: Prisma.Subset<T, Prisma.CardAggregateArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.GetCardAggregateType<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.CardAggregateArgs>(
            input: Omit<Prisma.Subset<T, Prisma.CardAggregateArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.GetCardAggregateType<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.GetCardAggregateType<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    createMany: {

        useMutation: <T extends Prisma.CardCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.CardCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.CardCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.CardCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.CardCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.CardCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.CardGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.CardGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.CardCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.CardCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.CardGetPayload<T>, Context>) => Promise<Prisma.CardGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.CardDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.CardDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.CardDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.CardDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.CardDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.CardDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.CardGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.CardGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.CardDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.CardDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.CardGetPayload<T>, Context>) => Promise<Prisma.CardGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.CardFindFirstArgs, TData = Prisma.CardGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.CardFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.CardGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.CardFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.CardFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.CardGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.CardGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findFirstOrThrow: {

        useQuery: <T extends Prisma.CardFindFirstOrThrowArgs, TData = Prisma.CardGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.CardFindFirstOrThrowArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.CardGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.CardFindFirstOrThrowArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.CardFindFirstOrThrowArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.CardGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.CardGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.CardFindManyArgs, TData = Array<Prisma.CardGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.CardFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.CardGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.CardFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.CardFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.CardGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.CardGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.CardFindUniqueArgs, TData = Prisma.CardGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.CardFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.CardGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.CardFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.CardFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.CardGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.CardGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUniqueOrThrow: {

        useQuery: <T extends Prisma.CardFindUniqueOrThrowArgs, TData = Prisma.CardGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.CardFindUniqueOrThrowArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.CardGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.CardFindUniqueOrThrowArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.CardFindUniqueOrThrowArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.CardGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.CardGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    groupBy: {

        useQuery: <T extends Prisma.CardGroupByArgs,
            HasSelectOrTake extends Prisma.Or<
                Prisma.Extends<'skip', Prisma.Keys<T>>,
                Prisma.Extends<'take', Prisma.Keys<T>>
            >,
            OrderByArg extends Prisma.True extends HasSelectOrTake
            ? { orderBy: Prisma.CardGroupByArgs['orderBy'] }
            : { orderBy?: Prisma.CardGroupByArgs['orderBy'] },
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
            , TData = {} extends InputErrors ? Prisma.GetCardGroupByPayload<T> : InputErrors>(
                input: Prisma.SubsetIntersection<T, Prisma.CardGroupByArgs, OrderByArg> & InputErrors,
                opts?: UseTRPCQueryOptions<string, T, {} extends InputErrors ? Prisma.GetCardGroupByPayload<T> : InputErrors, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.CardGroupByArgs,
            HasSelectOrTake extends Prisma.Or<
                Prisma.Extends<'skip', Prisma.Keys<T>>,
                Prisma.Extends<'take', Prisma.Keys<T>>
            >,
            OrderByArg extends Prisma.True extends HasSelectOrTake
            ? { orderBy: Prisma.CardGroupByArgs['orderBy'] }
            : { orderBy?: Prisma.CardGroupByArgs['orderBy'] },
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
            input: Omit<Prisma.SubsetIntersection<T, Prisma.CardGroupByArgs, OrderByArg> & InputErrors, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, {} extends InputErrors ? Prisma.GetCardGroupByPayload<T> : InputErrors, Error>
        ) => UseTRPCInfiniteQueryResult<
            {} extends InputErrors ? Prisma.GetCardGroupByPayload<T> : InputErrors,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.CardUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.CardUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.CardUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.CardUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.CardUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.CardUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.CardGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.CardGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.CardUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.CardUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.CardGetPayload<T>, Context>) => Promise<Prisma.CardGetPayload<T>>
            };

    };
    upsert: {

        useMutation: <T extends Prisma.CardUpsertArgs>(opts?: UseTRPCMutationOptions<
            Prisma.CardUpsertArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.CardGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.CardGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.CardUpsertArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.CardUpsertArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.CardGetPayload<T>, Context>) => Promise<Prisma.CardGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.CardCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.CardCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.CardCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.CardCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.CardCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.CardCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.CardCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.CardCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
