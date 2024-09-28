/* eslint-disable */
import type { Prisma, Article } from "@zenstackhq/runtime/models";
import type { UseMutationOptions, UseQueryOptions, UseInfiniteQueryOptions, InfiniteData } from '@tanstack/react-query';
import { getHooksContext } from '@zenstackhq/tanstack-query/runtime/react';
import { useModelQuery, useInfiniteModelQuery, useModelMutation } from '@zenstackhq/tanstack-query/runtime/react';
import type { PickEnumerable, CheckSelect, QueryError, ExtraQueryOptions, ExtraMutationOptions } from '@zenstackhq/tanstack-query/runtime';
import type { PolicyCrudKind } from '@zenstackhq/runtime'
import metadata from './__model_meta';
type DefaultError = QueryError;

export function useCreateArticle(options?: Omit<(UseMutationOptions<(Article | undefined), DefaultError, Prisma.ArticleCreateArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.ArticleCreateArgs, DefaultError, Article, true>('Article', 'POST', `${endpoint}/article/create`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ArticleCreateArgs>(
            args: Prisma.SelectSubset<T, Prisma.ArticleCreateArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, Article, Prisma.ArticleGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.ArticleCreateArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, Article, Prisma.ArticleGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useCreateManyArticle(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.ArticleCreateManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.ArticleCreateManyArgs, DefaultError, Prisma.BatchPayload, false>('Article', 'POST', `${endpoint}/article/createMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ArticleCreateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.ArticleCreateManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.ArticleCreateManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useFindManyArticle<TArgs extends Prisma.ArticleFindManyArgs, TQueryFnData = Array<Prisma.ArticleGetPayload<TArgs> & { $optimistic?: boolean }>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.ArticleFindManyArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('Article', `${endpoint}/article/findMany`, args, options, fetch);
}

export function useInfiniteFindManyArticle<TArgs extends Prisma.ArticleFindManyArgs, TQueryFnData = Array<Prisma.ArticleGetPayload<TArgs>>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.ArticleFindManyArgs>, options?: Omit<UseInfiniteQueryOptions<TQueryFnData, TError, TData>, 'queryKey'>) {
    const { endpoint, fetch } = getHooksContext();
    return useInfiniteModelQuery<TQueryFnData, TData, TError>('Article', `${endpoint}/article/findMany`, args, options, fetch);
}

export function useFindUniqueArticle<TArgs extends Prisma.ArticleFindUniqueArgs, TQueryFnData = Prisma.ArticleGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.ArticleFindUniqueArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('Article', `${endpoint}/article/findUnique`, args, options, fetch);
}

export function useFindFirstArticle<TArgs extends Prisma.ArticleFindFirstArgs, TQueryFnData = Prisma.ArticleGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.ArticleFindFirstArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('Article', `${endpoint}/article/findFirst`, args, options, fetch);
}

export function useUpdateArticle(options?: Omit<(UseMutationOptions<(Article | undefined), DefaultError, Prisma.ArticleUpdateArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.ArticleUpdateArgs, DefaultError, Article, true>('Article', 'PUT', `${endpoint}/article/update`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ArticleUpdateArgs>(
            args: Prisma.SelectSubset<T, Prisma.ArticleUpdateArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, Article, Prisma.ArticleGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.ArticleUpdateArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, Article, Prisma.ArticleGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useUpdateManyArticle(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.ArticleUpdateManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.ArticleUpdateManyArgs, DefaultError, Prisma.BatchPayload, false>('Article', 'PUT', `${endpoint}/article/updateMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ArticleUpdateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.ArticleUpdateManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.ArticleUpdateManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useUpsertArticle(options?: Omit<(UseMutationOptions<(Article | undefined), DefaultError, Prisma.ArticleUpsertArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.ArticleUpsertArgs, DefaultError, Article, true>('Article', 'POST', `${endpoint}/article/upsert`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ArticleUpsertArgs>(
            args: Prisma.SelectSubset<T, Prisma.ArticleUpsertArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, Article, Prisma.ArticleGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.ArticleUpsertArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, Article, Prisma.ArticleGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useDeleteArticle(options?: Omit<(UseMutationOptions<(Article | undefined), DefaultError, Prisma.ArticleDeleteArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.ArticleDeleteArgs, DefaultError, Article, true>('Article', 'DELETE', `${endpoint}/article/delete`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ArticleDeleteArgs>(
            args: Prisma.SelectSubset<T, Prisma.ArticleDeleteArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, Article, Prisma.ArticleGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.ArticleDeleteArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, Article, Prisma.ArticleGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useDeleteManyArticle(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.ArticleDeleteManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.ArticleDeleteManyArgs, DefaultError, Prisma.BatchPayload, false>('Article', 'DELETE', `${endpoint}/article/deleteMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ArticleDeleteManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.ArticleDeleteManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.ArticleDeleteManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useAggregateArticle<TArgs extends Prisma.ArticleAggregateArgs, TQueryFnData = Prisma.GetArticleAggregateType<TArgs>, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.ArticleAggregateArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('Article', `${endpoint}/article/aggregate`, args, options, fetch);
}

export function useGroupByArticle<TArgs extends Prisma.ArticleGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<TArgs>>, Prisma.Extends<'take', Prisma.Keys<TArgs>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.ArticleGroupByArgs['orderBy'] } : { orderBy?: Prisma.ArticleGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<TArgs['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<TArgs['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<TArgs['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends TArgs['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True
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
    Array<PickEnumerable<Prisma.ArticleGroupByOutputType, TArgs['by']> &
        {
            [P in ((keyof TArgs) & (keyof Prisma.ArticleGroupByOutputType))]: P extends '_count'
            ? TArgs[P] extends boolean
            ? number
            : Prisma.GetScalarType<TArgs[P], Prisma.ArticleGroupByOutputType[P]>
            : Prisma.GetScalarType<TArgs[P], Prisma.ArticleGroupByOutputType[P]>
        }
    > : InputErrors, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.SubsetIntersection<TArgs, Prisma.ArticleGroupByArgs, OrderByArg> & InputErrors>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('Article', `${endpoint}/article/groupBy`, args, options, fetch);
}

export function useCountArticle<TArgs extends Prisma.ArticleCountArgs, TQueryFnData = TArgs extends { select: any; } ? TArgs['select'] extends true ? number : Prisma.GetScalarType<TArgs['select'], Prisma.ArticleCountAggregateOutputType> : number, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.ArticleCountArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('Article', `${endpoint}/article/count`, args, options, fetch);
}

export function useCheckArticle<TError = DefaultError>(args: { operation: PolicyCrudKind; where?: { id?: string; name?: string; externalLink?: string; collectionId?: string }; }, options?: (Omit<UseQueryOptions<boolean, TError, boolean>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<boolean, boolean, TError>('Article', `${endpoint}/article/check`, args, options, fetch);
}
