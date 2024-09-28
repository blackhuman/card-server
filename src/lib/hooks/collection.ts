/* eslint-disable */
import type { Prisma, Collection } from "@zenstackhq/runtime/models";
import type { UseMutationOptions, UseQueryOptions, UseInfiniteQueryOptions, InfiniteData } from '@tanstack/react-query';
import { getHooksContext } from '@zenstackhq/tanstack-query/runtime/react';
import { useModelQuery, useInfiniteModelQuery, useModelMutation } from '@zenstackhq/tanstack-query/runtime/react';
import type { PickEnumerable, CheckSelect, QueryError, ExtraQueryOptions, ExtraMutationOptions } from '@zenstackhq/tanstack-query/runtime';
import type { PolicyCrudKind } from '@zenstackhq/runtime'
import metadata from './__model_meta';
type DefaultError = QueryError;

export function useCreateCollection(options?: Omit<(UseMutationOptions<(Collection | undefined), DefaultError, Prisma.CollectionCreateArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.CollectionCreateArgs, DefaultError, Collection, true>('Collection', 'POST', `${endpoint}/collection/create`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.CollectionCreateArgs>(
            args: Prisma.SelectSubset<T, Prisma.CollectionCreateArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, Collection, Prisma.CollectionGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.CollectionCreateArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, Collection, Prisma.CollectionGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useCreateManyCollection(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.CollectionCreateManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.CollectionCreateManyArgs, DefaultError, Prisma.BatchPayload, false>('Collection', 'POST', `${endpoint}/collection/createMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.CollectionCreateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.CollectionCreateManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.CollectionCreateManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useFindManyCollection<TArgs extends Prisma.CollectionFindManyArgs, TQueryFnData = Array<Prisma.CollectionGetPayload<TArgs> & { $optimistic?: boolean }>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.CollectionFindManyArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('Collection', `${endpoint}/collection/findMany`, args, options, fetch);
}

export function useInfiniteFindManyCollection<TArgs extends Prisma.CollectionFindManyArgs, TQueryFnData = Array<Prisma.CollectionGetPayload<TArgs>>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.CollectionFindManyArgs>, options?: Omit<UseInfiniteQueryOptions<TQueryFnData, TError, TData>, 'queryKey'>) {
    const { endpoint, fetch } = getHooksContext();
    return useInfiniteModelQuery<TQueryFnData, TData, TError>('Collection', `${endpoint}/collection/findMany`, args, options, fetch);
}

export function useFindUniqueCollection<TArgs extends Prisma.CollectionFindUniqueArgs, TQueryFnData = Prisma.CollectionGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.CollectionFindUniqueArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('Collection', `${endpoint}/collection/findUnique`, args, options, fetch);
}

export function useFindFirstCollection<TArgs extends Prisma.CollectionFindFirstArgs, TQueryFnData = Prisma.CollectionGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.CollectionFindFirstArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('Collection', `${endpoint}/collection/findFirst`, args, options, fetch);
}

export function useUpdateCollection(options?: Omit<(UseMutationOptions<(Collection | undefined), DefaultError, Prisma.CollectionUpdateArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.CollectionUpdateArgs, DefaultError, Collection, true>('Collection', 'PUT', `${endpoint}/collection/update`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.CollectionUpdateArgs>(
            args: Prisma.SelectSubset<T, Prisma.CollectionUpdateArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, Collection, Prisma.CollectionGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.CollectionUpdateArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, Collection, Prisma.CollectionGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useUpdateManyCollection(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.CollectionUpdateManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.CollectionUpdateManyArgs, DefaultError, Prisma.BatchPayload, false>('Collection', 'PUT', `${endpoint}/collection/updateMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.CollectionUpdateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.CollectionUpdateManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.CollectionUpdateManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useUpsertCollection(options?: Omit<(UseMutationOptions<(Collection | undefined), DefaultError, Prisma.CollectionUpsertArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.CollectionUpsertArgs, DefaultError, Collection, true>('Collection', 'POST', `${endpoint}/collection/upsert`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.CollectionUpsertArgs>(
            args: Prisma.SelectSubset<T, Prisma.CollectionUpsertArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, Collection, Prisma.CollectionGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.CollectionUpsertArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, Collection, Prisma.CollectionGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useDeleteCollection(options?: Omit<(UseMutationOptions<(Collection | undefined), DefaultError, Prisma.CollectionDeleteArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.CollectionDeleteArgs, DefaultError, Collection, true>('Collection', 'DELETE', `${endpoint}/collection/delete`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.CollectionDeleteArgs>(
            args: Prisma.SelectSubset<T, Prisma.CollectionDeleteArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, Collection, Prisma.CollectionGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.CollectionDeleteArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, Collection, Prisma.CollectionGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useDeleteManyCollection(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.CollectionDeleteManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.CollectionDeleteManyArgs, DefaultError, Prisma.BatchPayload, false>('Collection', 'DELETE', `${endpoint}/collection/deleteMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.CollectionDeleteManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.CollectionDeleteManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.CollectionDeleteManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useAggregateCollection<TArgs extends Prisma.CollectionAggregateArgs, TQueryFnData = Prisma.GetCollectionAggregateType<TArgs>, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.CollectionAggregateArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('Collection', `${endpoint}/collection/aggregate`, args, options, fetch);
}

export function useGroupByCollection<TArgs extends Prisma.CollectionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<TArgs>>, Prisma.Extends<'take', Prisma.Keys<TArgs>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.CollectionGroupByArgs['orderBy'] } : { orderBy?: Prisma.CollectionGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<TArgs['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<TArgs['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<TArgs['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends TArgs['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True
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
    Array<PickEnumerable<Prisma.CollectionGroupByOutputType, TArgs['by']> &
        {
            [P in ((keyof TArgs) & (keyof Prisma.CollectionGroupByOutputType))]: P extends '_count'
            ? TArgs[P] extends boolean
            ? number
            : Prisma.GetScalarType<TArgs[P], Prisma.CollectionGroupByOutputType[P]>
            : Prisma.GetScalarType<TArgs[P], Prisma.CollectionGroupByOutputType[P]>
        }
    > : InputErrors, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.SubsetIntersection<TArgs, Prisma.CollectionGroupByArgs, OrderByArg> & InputErrors>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('Collection', `${endpoint}/collection/groupBy`, args, options, fetch);
}

export function useCountCollection<TArgs extends Prisma.CollectionCountArgs, TQueryFnData = TArgs extends { select: any; } ? TArgs['select'] extends true ? number : Prisma.GetScalarType<TArgs['select'], Prisma.CollectionCountAggregateOutputType> : number, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.CollectionCountArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('Collection', `${endpoint}/collection/count`, args, options, fetch);
}

export function useCheckCollection<TError = DefaultError>(args: { operation: PolicyCrudKind; where?: { id?: string; name?: string; externalLink?: string; createdById?: string }; }, options?: (Omit<UseQueryOptions<boolean, TError, boolean>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<boolean, boolean, TError>('Collection', `${endpoint}/collection/check`, args, options, fetch);
}
