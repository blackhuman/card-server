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

        aggregate: procedure.input($Schema.PhraseInputSchema.aggregate).query(({ ctx, input }) => checkRead(db(ctx).phrase.aggregate(input as any))),

        createMany: procedure.input($Schema.PhraseInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).phrase.createMany(input as any))),

        create: procedure.input($Schema.PhraseInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).phrase.create(input as any))),

        deleteMany: procedure.input($Schema.PhraseInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).phrase.deleteMany(input as any))),

        delete: procedure.input($Schema.PhraseInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).phrase.delete(input as any))),

        findFirst: procedure.input($Schema.PhraseInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).phrase.findFirst(input as any))),

        findFirstOrThrow: procedure.input($Schema.PhraseInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).phrase.findFirstOrThrow(input as any))),

        findMany: procedure.input($Schema.PhraseInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).phrase.findMany(input as any))),

        findUnique: procedure.input($Schema.PhraseInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).phrase.findUnique(input as any))),

        findUniqueOrThrow: procedure.input($Schema.PhraseInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).phrase.findUniqueOrThrow(input as any))),

        groupBy: procedure.input($Schema.PhraseInputSchema.groupBy).query(({ ctx, input }) => checkRead(db(ctx).phrase.groupBy(input as any))),

        updateMany: procedure.input($Schema.PhraseInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).phrase.updateMany(input as any))),

        update: procedure.input($Schema.PhraseInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).phrase.update(input as any))),

        upsert: procedure.input($Schema.PhraseInputSchema.upsert).mutation(async ({ ctx, input }) => checkMutate(db(ctx).phrase.upsert(input as any))),

        count: procedure.input($Schema.PhraseInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).phrase.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    aggregate: {

        useQuery: <T extends Prisma.PhraseAggregateArgs, TData = Prisma.GetPhraseAggregateType<T>>(
            input: Prisma.Subset<T, Prisma.PhraseAggregateArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.GetPhraseAggregateType<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.PhraseAggregateArgs>(
            input: Omit<Prisma.Subset<T, Prisma.PhraseAggregateArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.GetPhraseAggregateType<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.GetPhraseAggregateType<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    createMany: {

        useMutation: <T extends Prisma.PhraseCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PhraseCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PhraseCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PhraseCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.PhraseCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PhraseCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.PhraseGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.PhraseGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PhraseCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PhraseCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.PhraseGetPayload<T>, Context>) => Promise<Prisma.PhraseGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.PhraseDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PhraseDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PhraseDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PhraseDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.PhraseDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PhraseDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.PhraseGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.PhraseGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PhraseDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PhraseDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.PhraseGetPayload<T>, Context>) => Promise<Prisma.PhraseGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.PhraseFindFirstArgs, TData = Prisma.PhraseGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.PhraseFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.PhraseGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.PhraseFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.PhraseFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.PhraseGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.PhraseGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findFirstOrThrow: {

        useQuery: <T extends Prisma.PhraseFindFirstOrThrowArgs, TData = Prisma.PhraseGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.PhraseFindFirstOrThrowArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.PhraseGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.PhraseFindFirstOrThrowArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.PhraseFindFirstOrThrowArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.PhraseGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.PhraseGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.PhraseFindManyArgs, TData = Array<Prisma.PhraseGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.PhraseFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.PhraseGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.PhraseFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.PhraseFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.PhraseGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.PhraseGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.PhraseFindUniqueArgs, TData = Prisma.PhraseGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.PhraseFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.PhraseGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.PhraseFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.PhraseFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.PhraseGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.PhraseGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUniqueOrThrow: {

        useQuery: <T extends Prisma.PhraseFindUniqueOrThrowArgs, TData = Prisma.PhraseGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.PhraseFindUniqueOrThrowArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.PhraseGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.PhraseFindUniqueOrThrowArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.PhraseFindUniqueOrThrowArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.PhraseGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.PhraseGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    groupBy: {

        useQuery: <T extends Prisma.PhraseGroupByArgs,
            HasSelectOrTake extends Prisma.Or<
                Prisma.Extends<'skip', Prisma.Keys<T>>,
                Prisma.Extends<'take', Prisma.Keys<T>>
            >,
            OrderByArg extends Prisma.True extends HasSelectOrTake
            ? { orderBy: Prisma.PhraseGroupByArgs['orderBy'] }
            : { orderBy?: Prisma.PhraseGroupByArgs['orderBy'] },
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
            , TData = {} extends InputErrors ? Prisma.GetPhraseGroupByPayload<T> : InputErrors>(
                input: Prisma.SubsetIntersection<T, Prisma.PhraseGroupByArgs, OrderByArg> & InputErrors,
                opts?: UseTRPCQueryOptions<string, T, {} extends InputErrors ? Prisma.GetPhraseGroupByPayload<T> : InputErrors, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.PhraseGroupByArgs,
            HasSelectOrTake extends Prisma.Or<
                Prisma.Extends<'skip', Prisma.Keys<T>>,
                Prisma.Extends<'take', Prisma.Keys<T>>
            >,
            OrderByArg extends Prisma.True extends HasSelectOrTake
            ? { orderBy: Prisma.PhraseGroupByArgs['orderBy'] }
            : { orderBy?: Prisma.PhraseGroupByArgs['orderBy'] },
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
            input: Omit<Prisma.SubsetIntersection<T, Prisma.PhraseGroupByArgs, OrderByArg> & InputErrors, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, {} extends InputErrors ? Prisma.GetPhraseGroupByPayload<T> : InputErrors, Error>
        ) => UseTRPCInfiniteQueryResult<
            {} extends InputErrors ? Prisma.GetPhraseGroupByPayload<T> : InputErrors,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.PhraseUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PhraseUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PhraseUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PhraseUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.PhraseUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PhraseUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.PhraseGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.PhraseGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PhraseUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PhraseUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.PhraseGetPayload<T>, Context>) => Promise<Prisma.PhraseGetPayload<T>>
            };

    };
    upsert: {

        useMutation: <T extends Prisma.PhraseUpsertArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PhraseUpsertArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.PhraseGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.PhraseGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PhraseUpsertArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PhraseUpsertArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.PhraseGetPayload<T>, Context>) => Promise<Prisma.PhraseGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.PhraseCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.PhraseCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.PhraseCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.PhraseCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.PhraseCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.PhraseCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.PhraseCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.PhraseCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
