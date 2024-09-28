/* eslint-disable */
import type { Prisma, Phrase } from "@zenstackhq/runtime/models";
import type { UseMutationOptions, UseQueryOptions, UseInfiniteQueryOptions, InfiniteData } from '@tanstack/react-query';
import { getHooksContext } from '@zenstackhq/tanstack-query/runtime/react';
import { useModelQuery, useInfiniteModelQuery, useModelMutation } from '@zenstackhq/tanstack-query/runtime/react';
import type { PickEnumerable, CheckSelect, QueryError, ExtraQueryOptions, ExtraMutationOptions } from '@zenstackhq/tanstack-query/runtime';
import type { PolicyCrudKind } from '@zenstackhq/runtime'
import metadata from './__model_meta';
type DefaultError = QueryError;

export function useCreatePhrase(options?: Omit<(UseMutationOptions<(Phrase | undefined), DefaultError, Prisma.PhraseCreateArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.PhraseCreateArgs, DefaultError, Phrase, true>('Phrase', 'POST', `${endpoint}/phrase/create`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.PhraseCreateArgs>(
            args: Prisma.SelectSubset<T, Prisma.PhraseCreateArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, Phrase, Prisma.PhraseGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.PhraseCreateArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, Phrase, Prisma.PhraseGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useCreateManyPhrase(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.PhraseCreateManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.PhraseCreateManyArgs, DefaultError, Prisma.BatchPayload, false>('Phrase', 'POST', `${endpoint}/phrase/createMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.PhraseCreateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.PhraseCreateManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.PhraseCreateManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useFindManyPhrase<TArgs extends Prisma.PhraseFindManyArgs, TQueryFnData = Array<Prisma.PhraseGetPayload<TArgs> & { $optimistic?: boolean }>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.PhraseFindManyArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('Phrase', `${endpoint}/phrase/findMany`, args, options, fetch);
}

export function useInfiniteFindManyPhrase<TArgs extends Prisma.PhraseFindManyArgs, TQueryFnData = Array<Prisma.PhraseGetPayload<TArgs>>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.PhraseFindManyArgs>, options?: Omit<UseInfiniteQueryOptions<TQueryFnData, TError, TData>, 'queryKey'>) {
    const { endpoint, fetch } = getHooksContext();
    return useInfiniteModelQuery<TQueryFnData, TData, TError>('Phrase', `${endpoint}/phrase/findMany`, args, options, fetch);
}

export function useFindUniquePhrase<TArgs extends Prisma.PhraseFindUniqueArgs, TQueryFnData = Prisma.PhraseGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.PhraseFindUniqueArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('Phrase', `${endpoint}/phrase/findUnique`, args, options, fetch);
}

export function useFindFirstPhrase<TArgs extends Prisma.PhraseFindFirstArgs, TQueryFnData = Prisma.PhraseGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.PhraseFindFirstArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('Phrase', `${endpoint}/phrase/findFirst`, args, options, fetch);
}

export function useUpdatePhrase(options?: Omit<(UseMutationOptions<(Phrase | undefined), DefaultError, Prisma.PhraseUpdateArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.PhraseUpdateArgs, DefaultError, Phrase, true>('Phrase', 'PUT', `${endpoint}/phrase/update`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.PhraseUpdateArgs>(
            args: Prisma.SelectSubset<T, Prisma.PhraseUpdateArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, Phrase, Prisma.PhraseGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.PhraseUpdateArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, Phrase, Prisma.PhraseGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useUpdateManyPhrase(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.PhraseUpdateManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.PhraseUpdateManyArgs, DefaultError, Prisma.BatchPayload, false>('Phrase', 'PUT', `${endpoint}/phrase/updateMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.PhraseUpdateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.PhraseUpdateManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.PhraseUpdateManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useUpsertPhrase(options?: Omit<(UseMutationOptions<(Phrase | undefined), DefaultError, Prisma.PhraseUpsertArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.PhraseUpsertArgs, DefaultError, Phrase, true>('Phrase', 'POST', `${endpoint}/phrase/upsert`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.PhraseUpsertArgs>(
            args: Prisma.SelectSubset<T, Prisma.PhraseUpsertArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, Phrase, Prisma.PhraseGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.PhraseUpsertArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, Phrase, Prisma.PhraseGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useDeletePhrase(options?: Omit<(UseMutationOptions<(Phrase | undefined), DefaultError, Prisma.PhraseDeleteArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.PhraseDeleteArgs, DefaultError, Phrase, true>('Phrase', 'DELETE', `${endpoint}/phrase/delete`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.PhraseDeleteArgs>(
            args: Prisma.SelectSubset<T, Prisma.PhraseDeleteArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, Phrase, Prisma.PhraseGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.PhraseDeleteArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, Phrase, Prisma.PhraseGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useDeleteManyPhrase(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.PhraseDeleteManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.PhraseDeleteManyArgs, DefaultError, Prisma.BatchPayload, false>('Phrase', 'DELETE', `${endpoint}/phrase/deleteMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.PhraseDeleteManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.PhraseDeleteManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.PhraseDeleteManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useAggregatePhrase<TArgs extends Prisma.PhraseAggregateArgs, TQueryFnData = Prisma.GetPhraseAggregateType<TArgs>, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.PhraseAggregateArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('Phrase', `${endpoint}/phrase/aggregate`, args, options, fetch);
}

export function useGroupByPhrase<TArgs extends Prisma.PhraseGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<TArgs>>, Prisma.Extends<'take', Prisma.Keys<TArgs>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.PhraseGroupByArgs['orderBy'] } : { orderBy?: Prisma.PhraseGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<TArgs['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<TArgs['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<TArgs['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends TArgs['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True
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
    : 'take' extends Prisma.Keys<TArgs>
    ? 'orderBy' extends Prisma.Keys<TArgs>
    ? ByValid extends Prisma.True
    ? {}
    : {
        [P in OrderFields]: P extends ByFields
        ? never
        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
    }[OrderFields]
    : 'Error: If you provide "take", you also need to provide "orderBy"'
    : 'skip' extends Prisma.Keys<TArgs>
    ? 'orderBy' extends Prisma.Keys<TArgs>
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
    }[OrderFields], TQueryFnData = {} extends InputErrors ?
    Array<PickEnumerable<Prisma.PhraseGroupByOutputType, TArgs['by']> &
        {
            [P in ((keyof TArgs) & (keyof Prisma.PhraseGroupByOutputType))]: P extends '_count'
            ? TArgs[P] extends boolean
            ? number
            : Prisma.GetScalarType<TArgs[P], Prisma.PhraseGroupByOutputType[P]>
            : Prisma.GetScalarType<TArgs[P], Prisma.PhraseGroupByOutputType[P]>
        }
    > : InputErrors, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.SubsetIntersection<TArgs, Prisma.PhraseGroupByArgs, OrderByArg> & InputErrors>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('Phrase', `${endpoint}/phrase/groupBy`, args, options, fetch);
}

export function useCountPhrase<TArgs extends Prisma.PhraseCountArgs, TQueryFnData = TArgs extends { select: any; } ? TArgs['select'] extends true ? number : Prisma.GetScalarType<TArgs['select'], Prisma.PhraseCountAggregateOutputType> : number, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.PhraseCountArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('Phrase', `${endpoint}/phrase/count`, args, options, fetch);
}

export function useCheckPhrase<TError = DefaultError>(args: { operation: PolicyCrudKind; where?: { id?: string; text?: string; textTranslation?: string; sentence?: string; sentenceTranslation?: string; articleId?: string; conversationId?: string }; }, options?: (Omit<UseQueryOptions<boolean, TError, boolean>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<boolean, boolean, TError>('Phrase', `${endpoint}/phrase/check`, args, options, fetch);
}
