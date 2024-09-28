/* eslint-disable */
const metadata = {
    models: {
        post: {
            name: 'Post', fields: {
                id: {
                    name: "id",
                    type: "Int",
                    isId: true,
                    attributes: [{ "name": "@default", "args": [] }],
                    isAutoIncrement: true,
                }, name: {
                    name: "name",
                    type: "String",
                }, createdAt: {
                    name: "createdAt",
                    type: "DateTime",
                    attributes: [{ "name": "@default", "args": [] }],
                }, updatedAt: {
                    name: "updatedAt",
                    type: "DateTime",
                    attributes: [{ "name": "@updatedAt", "args": [] }],
                }, published: {
                    name: "published",
                    type: "Boolean",
                    attributes: [{ "name": "@default", "args": [{ "value": false }] }],
                },
            }
            , uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                },
            }
            ,
        }
        ,
        phrase: {
            name: 'Phrase', fields: {
                id: {
                    name: "id",
                    type: "String",
                    isId: true,
                    attributes: [{ "name": "@default", "args": [] }],
                }, text: {
                    name: "text",
                    type: "String",
                }, textTranslation: {
                    name: "textTranslation",
                    type: "String",
                    isOptional: true,
                }, sentence: {
                    name: "sentence",
                    type: "String",
                    isOptional: true,
                }, sentenceTranslation: {
                    name: "sentenceTranslation",
                    type: "String",
                    isOptional: true,
                }, article: {
                    name: "article",
                    type: "Article",
                    isDataModel: true,
                    backLink: 'phrases',
                    isRelationOwner: true,
                    foreignKeyMapping: { "id": "articleId" },
                }, articleId: {
                    name: "articleId",
                    type: "String",
                    isForeignKey: true,
                    relationField: 'article',
                }, conversation: {
                    name: "conversation",
                    type: "Conversation",
                    isDataModel: true,
                    isOptional: true,
                    backLink: 'phrase',
                    isRelationOwner: true,
                    foreignKeyMapping: { "id": "conversationId" },
                }, conversationId: {
                    name: "conversationId",
                    type: "String",
                    isOptional: true,
                    isForeignKey: true,
                    relationField: 'conversation',
                }, createdAt: {
                    name: "createdAt",
                    type: "DateTime",
                    attributes: [{ "name": "@default", "args": [] }],
                }, updatedAt: {
                    name: "updatedAt",
                    type: "DateTime",
                    attributes: [{ "name": "@updatedAt", "args": [] }],
                },
            }
            , uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                }, conversationId: {
                    name: "conversationId",
                    fields: ["conversationId"]
                },
            }
            ,
        }
        ,
        article: {
            name: 'Article', fields: {
                id: {
                    name: "id",
                    type: "String",
                    isId: true,
                    attributes: [{ "name": "@default", "args": [] }],
                }, name: {
                    name: "name",
                    type: "String",
                }, externalLink: {
                    name: "externalLink",
                    type: "String",
                    isOptional: true,
                }, phrases: {
                    name: "phrases",
                    type: "Phrase",
                    isDataModel: true,
                    isArray: true,
                    backLink: 'article',
                }, createdAt: {
                    name: "createdAt",
                    type: "DateTime",
                    attributes: [{ "name": "@default", "args": [] }],
                }, updatedAt: {
                    name: "updatedAt",
                    type: "DateTime",
                    attributes: [{ "name": "@updatedAt", "args": [] }],
                }, collection: {
                    name: "collection",
                    type: "Collection",
                    isDataModel: true,
                    backLink: 'articles',
                    isRelationOwner: true,
                    foreignKeyMapping: { "id": "collectionId" },
                }, collectionId: {
                    name: "collectionId",
                    type: "String",
                    isForeignKey: true,
                    relationField: 'collection',
                },
            }
            , uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                },
            }
            ,
        }
        ,
        collection: {
            name: 'Collection', fields: {
                id: {
                    name: "id",
                    type: "String",
                    isId: true,
                    attributes: [{ "name": "@default", "args": [] }],
                }, name: {
                    name: "name",
                    type: "String",
                }, externalLink: {
                    name: "externalLink",
                    type: "String",
                    isOptional: true,
                }, createdAt: {
                    name: "createdAt",
                    type: "DateTime",
                    attributes: [{ "name": "@default", "args": [] }],
                }, updatedAt: {
                    name: "updatedAt",
                    type: "DateTime",
                    attributes: [{ "name": "@updatedAt", "args": [] }],
                }, articles: {
                    name: "articles",
                    type: "Article",
                    isDataModel: true,
                    isArray: true,
                    backLink: 'collection',
                }, createdBy: {
                    name: "createdBy",
                    type: "User",
                    isDataModel: true,
                    backLink: 'collections',
                    isRelationOwner: true,
                    foreignKeyMapping: { "id": "createdById" },
                }, createdById: {
                    name: "createdById",
                    type: "String",
                    attributes: [{ "name": "@default", "args": [] }],
                    isForeignKey: true,
                    relationField: 'createdBy',
                    defaultValueProvider: $default$Collection$createdById,
                },
            }
            , uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                },
            }
            ,
        }
        ,
        conversation: {
            name: 'Conversation', fields: {
                id: {
                    name: "id",
                    type: "String",
                    isId: true,
                    attributes: [{ "name": "@default", "args": [] }],
                }, messages: {
                    name: "messages",
                    type: "String",
                }, phrase: {
                    name: "phrase",
                    type: "Phrase",
                    isDataModel: true,
                    isOptional: true,
                    backLink: 'conversation',
                }, createdAt: {
                    name: "createdAt",
                    type: "DateTime",
                    attributes: [{ "name": "@default", "args": [] }],
                }, updatedAt: {
                    name: "updatedAt",
                    type: "DateTime",
                    attributes: [{ "name": "@updatedAt", "args": [] }],
                },
            }
            , uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                },
            }
            ,
        }
        ,
        account: {
            name: 'Account', fields: {
                id: {
                    name: "id",
                    type: "String",
                    isId: true,
                    attributes: [{ "name": "@default", "args": [] }],
                }, userId: {
                    name: "userId",
                    type: "String",
                    isForeignKey: true,
                    relationField: 'user',
                }, type: {
                    name: "type",
                    type: "String",
                }, provider: {
                    name: "provider",
                    type: "String",
                }, providerAccountId: {
                    name: "providerAccountId",
                    type: "String",
                }, refresh_token: {
                    name: "refresh_token",
                    type: "String",
                    isOptional: true,
                }, access_token: {
                    name: "access_token",
                    type: "String",
                    isOptional: true,
                }, expires_at: {
                    name: "expires_at",
                    type: "Int",
                    isOptional: true,
                }, token_type: {
                    name: "token_type",
                    type: "String",
                    isOptional: true,
                }, scope: {
                    name: "scope",
                    type: "String",
                    isOptional: true,
                }, id_token: {
                    name: "id_token",
                    type: "String",
                    isOptional: true,
                }, session_state: {
                    name: "session_state",
                    type: "String",
                    isOptional: true,
                }, user: {
                    name: "user",
                    type: "User",
                    isDataModel: true,
                    backLink: 'accounts',
                    isRelationOwner: true,
                    foreignKeyMapping: { "id": "userId" },
                }, refresh_token_expires_in: {
                    name: "refresh_token_expires_in",
                    type: "Int",
                    isOptional: true,
                },
            }
            , uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                }, provider_providerAccountId: {
                    name: "provider_providerAccountId",
                    fields: ["provider", "providerAccountId"]
                },
            }
            ,
        }
        ,
        session: {
            name: 'Session', fields: {
                id: {
                    name: "id",
                    type: "String",
                    isId: true,
                    attributes: [{ "name": "@default", "args": [] }],
                }, sessionToken: {
                    name: "sessionToken",
                    type: "String",
                }, userId: {
                    name: "userId",
                    type: "String",
                    isForeignKey: true,
                    relationField: 'user',
                }, expires: {
                    name: "expires",
                    type: "DateTime",
                }, user: {
                    name: "user",
                    type: "User",
                    isDataModel: true,
                    backLink: 'sessions',
                    isRelationOwner: true,
                    foreignKeyMapping: { "id": "userId" },
                },
            }
            , uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                }, sessionToken: {
                    name: "sessionToken",
                    fields: ["sessionToken"]
                },
            }
            ,
        }
        ,
        user: {
            name: 'User', fields: {
                id: {
                    name: "id",
                    type: "String",
                    isId: true,
                    attributes: [{ "name": "@default", "args": [] }],
                }, name: {
                    name: "name",
                    type: "String",
                    isOptional: true,
                }, email: {
                    name: "email",
                    type: "String",
                    isOptional: true,
                }, emailVerified: {
                    name: "emailVerified",
                    type: "DateTime",
                    isOptional: true,
                }, password: {
                    name: "password",
                    type: "String",
                }, image: {
                    name: "image",
                    type: "String",
                    isOptional: true,
                }, accounts: {
                    name: "accounts",
                    type: "Account",
                    isDataModel: true,
                    isArray: true,
                    backLink: 'user',
                }, sessions: {
                    name: "sessions",
                    type: "Session",
                    isDataModel: true,
                    isArray: true,
                    backLink: 'user',
                }, collections: {
                    name: "collections",
                    type: "Collection",
                    isDataModel: true,
                    isArray: true,
                    backLink: 'createdBy',
                },
            }
            , uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                }, email: {
                    name: "email",
                    fields: ["email"]
                },
            }
            ,
        }
        ,
        verificationToken: {
            name: 'VerificationToken', fields: {
                identifier: {
                    name: "identifier",
                    type: "String",
                }, token: {
                    name: "token",
                    type: "String",
                    isId: true,
                }, expires: {
                    name: "expires",
                    type: "DateTime",
                },
            }
            , uniqueConstraints: {
                token: {
                    name: "token",
                    fields: ["token"]
                }, identifier_token: {
                    name: "identifier_token",
                    fields: ["identifier", "token"]
                },
            }
            ,
        }
        ,
    }
    ,
    deleteCascade: {
        user: ['Account', 'Session'],
    }
    ,
    authModel: 'User'
};
function $default$Collection$createdById(user: any): unknown {
    return user?.id;
}
export default metadata;
