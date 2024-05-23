import { ZodSchema } from 'zod'
import { BaseQueryFn, FetchArgs, FetchBaseQueryError, FetchBaseQueryMeta } from '@reduxjs/toolkit/query'

type BaseQuery = BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, { responseSchema?: ZodSchema }, FetchBaseQueryMeta>

export const baseQueryWithZodValidation: (baseQuery: BaseQuery) => BaseQuery = (baseQuery: BaseQuery) => async (args, api, extraOptions) => {
  const returnValue = await baseQuery(args, api, extraOptions)
  const zodSchema = extraOptions?.responseSchema
  const { data } = returnValue
  if (data && zodSchema) {
    try {
      zodSchema.parse(data)
    } catch (error) {
      throw error
    }
  }
  return returnValue
}
