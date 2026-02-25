
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Adress
 * 
 */
export type Adress = $Result.DefaultSelection<Prisma.$AdressPayload>
/**
 * Model UserInfo
 * 
 */
export type UserInfo = $Result.DefaultSelection<Prisma.$UserInfoPayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model OrderProduct
 * 
 */
export type OrderProduct = $Result.DefaultSelection<Prisma.$OrderProductPayload>
/**
 * Model UserOrderComment
 * 
 */
export type UserOrderComment = $Result.DefaultSelection<Prisma.$UserOrderCommentPayload>
/**
 * Model ContactsMessage
 * 
 */
export type ContactsMessage = $Result.DefaultSelection<Prisma.$ContactsMessagePayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model CartsProduct
 * 
 */
export type CartsProduct = $Result.DefaultSelection<Prisma.$CartsProductPayload>
/**
 * Model ProductDescription
 * 
 */
export type ProductDescription = $Result.DefaultSelection<Prisma.$ProductDescriptionPayload>
/**
 * Model ProductCharacteristic
 * 
 */
export type ProductCharacteristic = $Result.DefaultSelection<Prisma.$ProductCharacteristicPayload>
/**
 * Model GmailCode
 * 
 */
export type GmailCode = $Result.DefaultSelection<Prisma.$GmailCodePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.adress`: Exposes CRUD operations for the **Adress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Adresses
    * const adresses = await prisma.adress.findMany()
    * ```
    */
  get adress(): Prisma.AdressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userInfo`: Exposes CRUD operations for the **UserInfo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserInfos
    * const userInfos = await prisma.userInfo.findMany()
    * ```
    */
  get userInfo(): Prisma.UserInfoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orderProduct`: Exposes CRUD operations for the **OrderProduct** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderProducts
    * const orderProducts = await prisma.orderProduct.findMany()
    * ```
    */
  get orderProduct(): Prisma.OrderProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userOrderComment`: Exposes CRUD operations for the **UserOrderComment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserOrderComments
    * const userOrderComments = await prisma.userOrderComment.findMany()
    * ```
    */
  get userOrderComment(): Prisma.UserOrderCommentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contactsMessage`: Exposes CRUD operations for the **ContactsMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContactsMessages
    * const contactsMessages = await prisma.contactsMessage.findMany()
    * ```
    */
  get contactsMessage(): Prisma.ContactsMessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cartsProduct`: Exposes CRUD operations for the **CartsProduct** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CartsProducts
    * const cartsProducts = await prisma.cartsProduct.findMany()
    * ```
    */
  get cartsProduct(): Prisma.CartsProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productDescription`: Exposes CRUD operations for the **ProductDescription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductDescriptions
    * const productDescriptions = await prisma.productDescription.findMany()
    * ```
    */
  get productDescription(): Prisma.ProductDescriptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productCharacteristic`: Exposes CRUD operations for the **ProductCharacteristic** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductCharacteristics
    * const productCharacteristics = await prisma.productCharacteristic.findMany()
    * ```
    */
  get productCharacteristic(): Prisma.ProductCharacteristicDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gmailCode`: Exposes CRUD operations for the **GmailCode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GmailCodes
    * const gmailCodes = await prisma.gmailCode.findMany()
    * ```
    */
  get gmailCode(): Prisma.GmailCodeDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Adress: 'Adress',
    UserInfo: 'UserInfo',
    Order: 'Order',
    OrderProduct: 'OrderProduct',
    UserOrderComment: 'UserOrderComment',
    ContactsMessage: 'ContactsMessage',
    Product: 'Product',
    Category: 'Category',
    CartsProduct: 'CartsProduct',
    ProductDescription: 'ProductDescription',
    ProductCharacteristic: 'ProductCharacteristic',
    GmailCode: 'GmailCode'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "adress" | "userInfo" | "order" | "orderProduct" | "userOrderComment" | "contactsMessage" | "product" | "category" | "cartsProduct" | "productDescription" | "productCharacteristic" | "gmailCode"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Adress: {
        payload: Prisma.$AdressPayload<ExtArgs>
        fields: Prisma.AdressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdressPayload>
          }
          findFirst: {
            args: Prisma.AdressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdressPayload>
          }
          findMany: {
            args: Prisma.AdressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdressPayload>[]
          }
          create: {
            args: Prisma.AdressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdressPayload>
          }
          createMany: {
            args: Prisma.AdressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdressPayload>[]
          }
          delete: {
            args: Prisma.AdressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdressPayload>
          }
          update: {
            args: Prisma.AdressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdressPayload>
          }
          deleteMany: {
            args: Prisma.AdressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdressPayload>[]
          }
          upsert: {
            args: Prisma.AdressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdressPayload>
          }
          aggregate: {
            args: Prisma.AdressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdress>
          }
          groupBy: {
            args: Prisma.AdressGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdressGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdressCountArgs<ExtArgs>
            result: $Utils.Optional<AdressCountAggregateOutputType> | number
          }
        }
      }
      UserInfo: {
        payload: Prisma.$UserInfoPayload<ExtArgs>
        fields: Prisma.UserInfoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserInfoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInfoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserInfoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInfoPayload>
          }
          findFirst: {
            args: Prisma.UserInfoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInfoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserInfoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInfoPayload>
          }
          findMany: {
            args: Prisma.UserInfoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInfoPayload>[]
          }
          create: {
            args: Prisma.UserInfoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInfoPayload>
          }
          createMany: {
            args: Prisma.UserInfoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserInfoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInfoPayload>[]
          }
          delete: {
            args: Prisma.UserInfoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInfoPayload>
          }
          update: {
            args: Prisma.UserInfoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInfoPayload>
          }
          deleteMany: {
            args: Prisma.UserInfoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserInfoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserInfoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInfoPayload>[]
          }
          upsert: {
            args: Prisma.UserInfoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInfoPayload>
          }
          aggregate: {
            args: Prisma.UserInfoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserInfo>
          }
          groupBy: {
            args: Prisma.UserInfoGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserInfoGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserInfoCountArgs<ExtArgs>
            result: $Utils.Optional<UserInfoCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      OrderProduct: {
        payload: Prisma.$OrderProductPayload<ExtArgs>
        fields: Prisma.OrderProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderProductPayload>
          }
          findFirst: {
            args: Prisma.OrderProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderProductPayload>
          }
          findMany: {
            args: Prisma.OrderProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderProductPayload>[]
          }
          create: {
            args: Prisma.OrderProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderProductPayload>
          }
          createMany: {
            args: Prisma.OrderProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderProductPayload>[]
          }
          delete: {
            args: Prisma.OrderProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderProductPayload>
          }
          update: {
            args: Prisma.OrderProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderProductPayload>
          }
          deleteMany: {
            args: Prisma.OrderProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderProductPayload>[]
          }
          upsert: {
            args: Prisma.OrderProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderProductPayload>
          }
          aggregate: {
            args: Prisma.OrderProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderProduct>
          }
          groupBy: {
            args: Prisma.OrderProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderProductCountArgs<ExtArgs>
            result: $Utils.Optional<OrderProductCountAggregateOutputType> | number
          }
        }
      }
      UserOrderComment: {
        payload: Prisma.$UserOrderCommentPayload<ExtArgs>
        fields: Prisma.UserOrderCommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserOrderCommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOrderCommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserOrderCommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOrderCommentPayload>
          }
          findFirst: {
            args: Prisma.UserOrderCommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOrderCommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserOrderCommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOrderCommentPayload>
          }
          findMany: {
            args: Prisma.UserOrderCommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOrderCommentPayload>[]
          }
          create: {
            args: Prisma.UserOrderCommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOrderCommentPayload>
          }
          createMany: {
            args: Prisma.UserOrderCommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserOrderCommentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOrderCommentPayload>[]
          }
          delete: {
            args: Prisma.UserOrderCommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOrderCommentPayload>
          }
          update: {
            args: Prisma.UserOrderCommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOrderCommentPayload>
          }
          deleteMany: {
            args: Prisma.UserOrderCommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserOrderCommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserOrderCommentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOrderCommentPayload>[]
          }
          upsert: {
            args: Prisma.UserOrderCommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOrderCommentPayload>
          }
          aggregate: {
            args: Prisma.UserOrderCommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserOrderComment>
          }
          groupBy: {
            args: Prisma.UserOrderCommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserOrderCommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserOrderCommentCountArgs<ExtArgs>
            result: $Utils.Optional<UserOrderCommentCountAggregateOutputType> | number
          }
        }
      }
      ContactsMessage: {
        payload: Prisma.$ContactsMessagePayload<ExtArgs>
        fields: Prisma.ContactsMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactsMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactsMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactsMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactsMessagePayload>
          }
          findFirst: {
            args: Prisma.ContactsMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactsMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactsMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactsMessagePayload>
          }
          findMany: {
            args: Prisma.ContactsMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactsMessagePayload>[]
          }
          create: {
            args: Prisma.ContactsMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactsMessagePayload>
          }
          createMany: {
            args: Prisma.ContactsMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContactsMessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactsMessagePayload>[]
          }
          delete: {
            args: Prisma.ContactsMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactsMessagePayload>
          }
          update: {
            args: Prisma.ContactsMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactsMessagePayload>
          }
          deleteMany: {
            args: Prisma.ContactsMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContactsMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContactsMessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactsMessagePayload>[]
          }
          upsert: {
            args: Prisma.ContactsMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactsMessagePayload>
          }
          aggregate: {
            args: Prisma.ContactsMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContactsMessage>
          }
          groupBy: {
            args: Prisma.ContactsMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactsMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactsMessageCountArgs<ExtArgs>
            result: $Utils.Optional<ContactsMessageCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      CartsProduct: {
        payload: Prisma.$CartsProductPayload<ExtArgs>
        fields: Prisma.CartsProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CartsProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartsProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CartsProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartsProductPayload>
          }
          findFirst: {
            args: Prisma.CartsProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartsProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CartsProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartsProductPayload>
          }
          findMany: {
            args: Prisma.CartsProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartsProductPayload>[]
          }
          create: {
            args: Prisma.CartsProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartsProductPayload>
          }
          createMany: {
            args: Prisma.CartsProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CartsProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartsProductPayload>[]
          }
          delete: {
            args: Prisma.CartsProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartsProductPayload>
          }
          update: {
            args: Prisma.CartsProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartsProductPayload>
          }
          deleteMany: {
            args: Prisma.CartsProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CartsProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CartsProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartsProductPayload>[]
          }
          upsert: {
            args: Prisma.CartsProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartsProductPayload>
          }
          aggregate: {
            args: Prisma.CartsProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCartsProduct>
          }
          groupBy: {
            args: Prisma.CartsProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<CartsProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.CartsProductCountArgs<ExtArgs>
            result: $Utils.Optional<CartsProductCountAggregateOutputType> | number
          }
        }
      }
      ProductDescription: {
        payload: Prisma.$ProductDescriptionPayload<ExtArgs>
        fields: Prisma.ProductDescriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductDescriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductDescriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductDescriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductDescriptionPayload>
          }
          findFirst: {
            args: Prisma.ProductDescriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductDescriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductDescriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductDescriptionPayload>
          }
          findMany: {
            args: Prisma.ProductDescriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductDescriptionPayload>[]
          }
          create: {
            args: Prisma.ProductDescriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductDescriptionPayload>
          }
          createMany: {
            args: Prisma.ProductDescriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductDescriptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductDescriptionPayload>[]
          }
          delete: {
            args: Prisma.ProductDescriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductDescriptionPayload>
          }
          update: {
            args: Prisma.ProductDescriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductDescriptionPayload>
          }
          deleteMany: {
            args: Prisma.ProductDescriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductDescriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductDescriptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductDescriptionPayload>[]
          }
          upsert: {
            args: Prisma.ProductDescriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductDescriptionPayload>
          }
          aggregate: {
            args: Prisma.ProductDescriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductDescription>
          }
          groupBy: {
            args: Prisma.ProductDescriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductDescriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductDescriptionCountArgs<ExtArgs>
            result: $Utils.Optional<ProductDescriptionCountAggregateOutputType> | number
          }
        }
      }
      ProductCharacteristic: {
        payload: Prisma.$ProductCharacteristicPayload<ExtArgs>
        fields: Prisma.ProductCharacteristicFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductCharacteristicFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCharacteristicPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductCharacteristicFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCharacteristicPayload>
          }
          findFirst: {
            args: Prisma.ProductCharacteristicFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCharacteristicPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductCharacteristicFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCharacteristicPayload>
          }
          findMany: {
            args: Prisma.ProductCharacteristicFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCharacteristicPayload>[]
          }
          create: {
            args: Prisma.ProductCharacteristicCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCharacteristicPayload>
          }
          createMany: {
            args: Prisma.ProductCharacteristicCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCharacteristicCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCharacteristicPayload>[]
          }
          delete: {
            args: Prisma.ProductCharacteristicDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCharacteristicPayload>
          }
          update: {
            args: Prisma.ProductCharacteristicUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCharacteristicPayload>
          }
          deleteMany: {
            args: Prisma.ProductCharacteristicDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductCharacteristicUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductCharacteristicUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCharacteristicPayload>[]
          }
          upsert: {
            args: Prisma.ProductCharacteristicUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCharacteristicPayload>
          }
          aggregate: {
            args: Prisma.ProductCharacteristicAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductCharacteristic>
          }
          groupBy: {
            args: Prisma.ProductCharacteristicGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductCharacteristicGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCharacteristicCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCharacteristicCountAggregateOutputType> | number
          }
        }
      }
      GmailCode: {
        payload: Prisma.$GmailCodePayload<ExtArgs>
        fields: Prisma.GmailCodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GmailCodeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GmailCodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GmailCodeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GmailCodePayload>
          }
          findFirst: {
            args: Prisma.GmailCodeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GmailCodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GmailCodeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GmailCodePayload>
          }
          findMany: {
            args: Prisma.GmailCodeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GmailCodePayload>[]
          }
          create: {
            args: Prisma.GmailCodeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GmailCodePayload>
          }
          createMany: {
            args: Prisma.GmailCodeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GmailCodeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GmailCodePayload>[]
          }
          delete: {
            args: Prisma.GmailCodeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GmailCodePayload>
          }
          update: {
            args: Prisma.GmailCodeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GmailCodePayload>
          }
          deleteMany: {
            args: Prisma.GmailCodeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GmailCodeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GmailCodeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GmailCodePayload>[]
          }
          upsert: {
            args: Prisma.GmailCodeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GmailCodePayload>
          }
          aggregate: {
            args: Prisma.GmailCodeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGmailCode>
          }
          groupBy: {
            args: Prisma.GmailCodeGroupByArgs<ExtArgs>
            result: $Utils.Optional<GmailCodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.GmailCodeCountArgs<ExtArgs>
            result: $Utils.Optional<GmailCodeCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    adress?: AdressOmit
    userInfo?: UserInfoOmit
    order?: OrderOmit
    orderProduct?: OrderProductOmit
    userOrderComment?: UserOrderCommentOmit
    contactsMessage?: ContactsMessageOmit
    product?: ProductOmit
    category?: CategoryOmit
    cartsProduct?: CartsProductOmit
    productDescription?: ProductDescriptionOmit
    productCharacteristic?: ProductCharacteristicOmit
    gmailCode?: GmailCodeOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    contactsMessages: number
    userOrderComment: number
    userAdress: number
    order: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contactsMessages?: boolean | UserCountOutputTypeCountContactsMessagesArgs
    userOrderComment?: boolean | UserCountOutputTypeCountUserOrderCommentArgs
    userAdress?: boolean | UserCountOutputTypeCountUserAdressArgs
    order?: boolean | UserCountOutputTypeCountOrderArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountContactsMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactsMessageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserOrderCommentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserOrderCommentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserAdressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdressWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }


  /**
   * Count Type AdressCountOutputType
   */

  export type AdressCountOutputType = {
    order: number
  }

  export type AdressCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | AdressCountOutputTypeCountOrderArgs
  }

  // Custom InputTypes
  /**
   * AdressCountOutputType without action
   */
  export type AdressCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdressCountOutputType
     */
    select?: AdressCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AdressCountOutputType without action
   */
  export type AdressCountOutputTypeCountOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    productDescription: number
    orderProduct: number
    category: number
    cartsProduct: number
    ProductCharacteristic: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productDescription?: boolean | ProductCountOutputTypeCountProductDescriptionArgs
    orderProduct?: boolean | ProductCountOutputTypeCountOrderProductArgs
    category?: boolean | ProductCountOutputTypeCountCategoryArgs
    cartsProduct?: boolean | ProductCountOutputTypeCountCartsProductArgs
    ProductCharacteristic?: boolean | ProductCountOutputTypeCountProductCharacteristicArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountProductDescriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductDescriptionWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountOrderProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderProductWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountCartsProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartsProductWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountProductCharacteristicArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductCharacteristicWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    product: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | CategoryCountOutputTypeCountProductArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }


  /**
   * Count Type CartsProductCountOutputType
   */

  export type CartsProductCountOutputType = {
    product: number
  }

  export type CartsProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | CartsProductCountOutputTypeCountProductArgs
  }

  // Custom InputTypes
  /**
   * CartsProductCountOutputType without action
   */
  export type CartsProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartsProductCountOutputType
     */
    select?: CartsProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CartsProductCountOutputType without action
   */
  export type CartsProductCountOutputTypeCountProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    password: string | null
    isAdmin: boolean | null
    name: string | null
    surname: string | null
    middleName: string | null
    birthday: string | null
    phoneNumber: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    password: string | null
    isAdmin: boolean | null
    name: string | null
    surname: string | null
    middleName: string | null
    birthday: string | null
    phoneNumber: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    password: number
    isAdmin: number
    name: number
    surname: number
    middleName: number
    birthday: number
    phoneNumber: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    isAdmin?: true
    name?: true
    surname?: true
    middleName?: true
    birthday?: true
    phoneNumber?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    isAdmin?: true
    name?: true
    surname?: true
    middleName?: true
    birthday?: true
    phoneNumber?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    isAdmin?: true
    name?: true
    surname?: true
    middleName?: true
    birthday?: true
    phoneNumber?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    username: string
    email: string
    password: string
    isAdmin: boolean
    name: string | null
    surname: string | null
    middleName: string | null
    birthday: string | null
    phoneNumber: string | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    isAdmin?: boolean
    name?: boolean
    surname?: boolean
    middleName?: boolean
    birthday?: boolean
    phoneNumber?: boolean
    contactsMessages?: boolean | User$contactsMessagesArgs<ExtArgs>
    userInfo?: boolean | User$userInfoArgs<ExtArgs>
    userOrderComment?: boolean | User$userOrderCommentArgs<ExtArgs>
    userAdress?: boolean | User$userAdressArgs<ExtArgs>
    order?: boolean | User$orderArgs<ExtArgs>
    cartsProduct?: boolean | User$cartsProductArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    isAdmin?: boolean
    name?: boolean
    surname?: boolean
    middleName?: boolean
    birthday?: boolean
    phoneNumber?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    isAdmin?: boolean
    name?: boolean
    surname?: boolean
    middleName?: boolean
    birthday?: boolean
    phoneNumber?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    isAdmin?: boolean
    name?: boolean
    surname?: boolean
    middleName?: boolean
    birthday?: boolean
    phoneNumber?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "password" | "isAdmin" | "name" | "surname" | "middleName" | "birthday" | "phoneNumber", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contactsMessages?: boolean | User$contactsMessagesArgs<ExtArgs>
    userInfo?: boolean | User$userInfoArgs<ExtArgs>
    userOrderComment?: boolean | User$userOrderCommentArgs<ExtArgs>
    userAdress?: boolean | User$userAdressArgs<ExtArgs>
    order?: boolean | User$orderArgs<ExtArgs>
    cartsProduct?: boolean | User$cartsProductArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      contactsMessages: Prisma.$ContactsMessagePayload<ExtArgs>[]
      userInfo: Prisma.$UserInfoPayload<ExtArgs> | null
      userOrderComment: Prisma.$UserOrderCommentPayload<ExtArgs>[]
      userAdress: Prisma.$AdressPayload<ExtArgs>[]
      order: Prisma.$OrderPayload<ExtArgs>[]
      cartsProduct: Prisma.$CartsProductPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      email: string
      password: string
      isAdmin: boolean
      name: string | null
      surname: string | null
      middleName: string | null
      birthday: string | null
      phoneNumber: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
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
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    contactsMessages<T extends User$contactsMessagesArgs<ExtArgs> = {}>(args?: Subset<T, User$contactsMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactsMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userInfo<T extends User$userInfoArgs<ExtArgs> = {}>(args?: Subset<T, User$userInfoArgs<ExtArgs>>): Prisma__UserInfoClient<$Result.GetResult<Prisma.$UserInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    userOrderComment<T extends User$userOrderCommentArgs<ExtArgs> = {}>(args?: Subset<T, User$userOrderCommentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserOrderCommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userAdress<T extends User$userAdressArgs<ExtArgs> = {}>(args?: Subset<T, User$userAdressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    order<T extends User$orderArgs<ExtArgs> = {}>(args?: Subset<T, User$orderArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cartsProduct<T extends User$cartsProductArgs<ExtArgs> = {}>(args?: Subset<T, User$cartsProductArgs<ExtArgs>>): Prisma__CartsProductClient<$Result.GetResult<Prisma.$CartsProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly isAdmin: FieldRef<"User", 'Boolean'>
    readonly name: FieldRef<"User", 'String'>
    readonly surname: FieldRef<"User", 'String'>
    readonly middleName: FieldRef<"User", 'String'>
    readonly birthday: FieldRef<"User", 'String'>
    readonly phoneNumber: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.contactsMessages
   */
  export type User$contactsMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactsMessage
     */
    select?: ContactsMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactsMessage
     */
    omit?: ContactsMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactsMessageInclude<ExtArgs> | null
    where?: ContactsMessageWhereInput
    orderBy?: ContactsMessageOrderByWithRelationInput | ContactsMessageOrderByWithRelationInput[]
    cursor?: ContactsMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContactsMessageScalarFieldEnum | ContactsMessageScalarFieldEnum[]
  }

  /**
   * User.userInfo
   */
  export type User$userInfoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInfo
     */
    select?: UserInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInfo
     */
    omit?: UserInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInfoInclude<ExtArgs> | null
    where?: UserInfoWhereInput
  }

  /**
   * User.userOrderComment
   */
  export type User$userOrderCommentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOrderComment
     */
    select?: UserOrderCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOrderComment
     */
    omit?: UserOrderCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOrderCommentInclude<ExtArgs> | null
    where?: UserOrderCommentWhereInput
    orderBy?: UserOrderCommentOrderByWithRelationInput | UserOrderCommentOrderByWithRelationInput[]
    cursor?: UserOrderCommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserOrderCommentScalarFieldEnum | UserOrderCommentScalarFieldEnum[]
  }

  /**
   * User.userAdress
   */
  export type User$userAdressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adress
     */
    select?: AdressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adress
     */
    omit?: AdressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdressInclude<ExtArgs> | null
    where?: AdressWhereInput
    orderBy?: AdressOrderByWithRelationInput | AdressOrderByWithRelationInput[]
    cursor?: AdressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdressScalarFieldEnum | AdressScalarFieldEnum[]
  }

  /**
   * User.order
   */
  export type User$orderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * User.cartsProduct
   */
  export type User$cartsProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartsProduct
     */
    select?: CartsProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartsProduct
     */
    omit?: CartsProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartsProductInclude<ExtArgs> | null
    where?: CartsProductWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Adress
   */

  export type AggregateAdress = {
    _count: AdressCountAggregateOutputType | null
    _avg: AdressAvgAggregateOutputType | null
    _sum: AdressSumAggregateOutputType | null
    _min: AdressMinAggregateOutputType | null
    _max: AdressMaxAggregateOutputType | null
  }

  export type AdressAvgAggregateOutputType = {
    id: number | null
    appartament: number | null
    entrants: number | null
    userId: number | null
  }

  export type AdressSumAggregateOutputType = {
    id: number | null
    appartament: number | null
    entrants: number | null
    userId: number | null
  }

  export type AdressMinAggregateOutputType = {
    id: number | null
    postDepartament: string | null
    street: string | null
    home: string | null
    appartament: number | null
    entrants: number | null
    userId: number | null
  }

  export type AdressMaxAggregateOutputType = {
    id: number | null
    postDepartament: string | null
    street: string | null
    home: string | null
    appartament: number | null
    entrants: number | null
    userId: number | null
  }

  export type AdressCountAggregateOutputType = {
    id: number
    postDepartament: number
    street: number
    home: number
    appartament: number
    entrants: number
    userId: number
    _all: number
  }


  export type AdressAvgAggregateInputType = {
    id?: true
    appartament?: true
    entrants?: true
    userId?: true
  }

  export type AdressSumAggregateInputType = {
    id?: true
    appartament?: true
    entrants?: true
    userId?: true
  }

  export type AdressMinAggregateInputType = {
    id?: true
    postDepartament?: true
    street?: true
    home?: true
    appartament?: true
    entrants?: true
    userId?: true
  }

  export type AdressMaxAggregateInputType = {
    id?: true
    postDepartament?: true
    street?: true
    home?: true
    appartament?: true
    entrants?: true
    userId?: true
  }

  export type AdressCountAggregateInputType = {
    id?: true
    postDepartament?: true
    street?: true
    home?: true
    appartament?: true
    entrants?: true
    userId?: true
    _all?: true
  }

  export type AdressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Adress to aggregate.
     */
    where?: AdressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Adresses to fetch.
     */
    orderBy?: AdressOrderByWithRelationInput | AdressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Adresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Adresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Adresses
    **/
    _count?: true | AdressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdressMaxAggregateInputType
  }

  export type GetAdressAggregateType<T extends AdressAggregateArgs> = {
        [P in keyof T & keyof AggregateAdress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdress[P]>
      : GetScalarType<T[P], AggregateAdress[P]>
  }




  export type AdressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdressWhereInput
    orderBy?: AdressOrderByWithAggregationInput | AdressOrderByWithAggregationInput[]
    by: AdressScalarFieldEnum[] | AdressScalarFieldEnum
    having?: AdressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdressCountAggregateInputType | true
    _avg?: AdressAvgAggregateInputType
    _sum?: AdressSumAggregateInputType
    _min?: AdressMinAggregateInputType
    _max?: AdressMaxAggregateInputType
  }

  export type AdressGroupByOutputType = {
    id: number
    postDepartament: string
    street: string
    home: string
    appartament: number
    entrants: number
    userId: number
    _count: AdressCountAggregateOutputType | null
    _avg: AdressAvgAggregateOutputType | null
    _sum: AdressSumAggregateOutputType | null
    _min: AdressMinAggregateOutputType | null
    _max: AdressMaxAggregateOutputType | null
  }

  type GetAdressGroupByPayload<T extends AdressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdressGroupByOutputType[P]>
            : GetScalarType<T[P], AdressGroupByOutputType[P]>
        }
      >
    >


  export type AdressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postDepartament?: boolean
    street?: boolean
    home?: boolean
    appartament?: boolean
    entrants?: boolean
    userId?: boolean
    user?: boolean | Adress$userArgs<ExtArgs>
    order?: boolean | Adress$orderArgs<ExtArgs>
    _count?: boolean | AdressCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adress"]>

  export type AdressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postDepartament?: boolean
    street?: boolean
    home?: boolean
    appartament?: boolean
    entrants?: boolean
    userId?: boolean
    user?: boolean | Adress$userArgs<ExtArgs>
  }, ExtArgs["result"]["adress"]>

  export type AdressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postDepartament?: boolean
    street?: boolean
    home?: boolean
    appartament?: boolean
    entrants?: boolean
    userId?: boolean
    user?: boolean | Adress$userArgs<ExtArgs>
  }, ExtArgs["result"]["adress"]>

  export type AdressSelectScalar = {
    id?: boolean
    postDepartament?: boolean
    street?: boolean
    home?: boolean
    appartament?: boolean
    entrants?: boolean
    userId?: boolean
  }

  export type AdressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "postDepartament" | "street" | "home" | "appartament" | "entrants" | "userId", ExtArgs["result"]["adress"]>
  export type AdressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Adress$userArgs<ExtArgs>
    order?: boolean | Adress$orderArgs<ExtArgs>
    _count?: boolean | AdressCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AdressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Adress$userArgs<ExtArgs>
  }
  export type AdressIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Adress$userArgs<ExtArgs>
  }

  export type $AdressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Adress"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      order: Prisma.$OrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      postDepartament: string
      street: string
      home: string
      appartament: number
      entrants: number
      userId: number
    }, ExtArgs["result"]["adress"]>
    composites: {}
  }

  type AdressGetPayload<S extends boolean | null | undefined | AdressDefaultArgs> = $Result.GetResult<Prisma.$AdressPayload, S>

  type AdressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdressCountAggregateInputType | true
    }

  export interface AdressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Adress'], meta: { name: 'Adress' } }
    /**
     * Find zero or one Adress that matches the filter.
     * @param {AdressFindUniqueArgs} args - Arguments to find a Adress
     * @example
     * // Get one Adress
     * const adress = await prisma.adress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdressFindUniqueArgs>(args: SelectSubset<T, AdressFindUniqueArgs<ExtArgs>>): Prisma__AdressClient<$Result.GetResult<Prisma.$AdressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Adress that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdressFindUniqueOrThrowArgs} args - Arguments to find a Adress
     * @example
     * // Get one Adress
     * const adress = await prisma.adress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdressFindUniqueOrThrowArgs>(args: SelectSubset<T, AdressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdressClient<$Result.GetResult<Prisma.$AdressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Adress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdressFindFirstArgs} args - Arguments to find a Adress
     * @example
     * // Get one Adress
     * const adress = await prisma.adress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdressFindFirstArgs>(args?: SelectSubset<T, AdressFindFirstArgs<ExtArgs>>): Prisma__AdressClient<$Result.GetResult<Prisma.$AdressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Adress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdressFindFirstOrThrowArgs} args - Arguments to find a Adress
     * @example
     * // Get one Adress
     * const adress = await prisma.adress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdressFindFirstOrThrowArgs>(args?: SelectSubset<T, AdressFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdressClient<$Result.GetResult<Prisma.$AdressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Adresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Adresses
     * const adresses = await prisma.adress.findMany()
     * 
     * // Get first 10 Adresses
     * const adresses = await prisma.adress.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adressWithIdOnly = await prisma.adress.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdressFindManyArgs>(args?: SelectSubset<T, AdressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Adress.
     * @param {AdressCreateArgs} args - Arguments to create a Adress.
     * @example
     * // Create one Adress
     * const Adress = await prisma.adress.create({
     *   data: {
     *     // ... data to create a Adress
     *   }
     * })
     * 
     */
    create<T extends AdressCreateArgs>(args: SelectSubset<T, AdressCreateArgs<ExtArgs>>): Prisma__AdressClient<$Result.GetResult<Prisma.$AdressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Adresses.
     * @param {AdressCreateManyArgs} args - Arguments to create many Adresses.
     * @example
     * // Create many Adresses
     * const adress = await prisma.adress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdressCreateManyArgs>(args?: SelectSubset<T, AdressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Adresses and returns the data saved in the database.
     * @param {AdressCreateManyAndReturnArgs} args - Arguments to create many Adresses.
     * @example
     * // Create many Adresses
     * const adress = await prisma.adress.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Adresses and only return the `id`
     * const adressWithIdOnly = await prisma.adress.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdressCreateManyAndReturnArgs>(args?: SelectSubset<T, AdressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Adress.
     * @param {AdressDeleteArgs} args - Arguments to delete one Adress.
     * @example
     * // Delete one Adress
     * const Adress = await prisma.adress.delete({
     *   where: {
     *     // ... filter to delete one Adress
     *   }
     * })
     * 
     */
    delete<T extends AdressDeleteArgs>(args: SelectSubset<T, AdressDeleteArgs<ExtArgs>>): Prisma__AdressClient<$Result.GetResult<Prisma.$AdressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Adress.
     * @param {AdressUpdateArgs} args - Arguments to update one Adress.
     * @example
     * // Update one Adress
     * const adress = await prisma.adress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdressUpdateArgs>(args: SelectSubset<T, AdressUpdateArgs<ExtArgs>>): Prisma__AdressClient<$Result.GetResult<Prisma.$AdressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Adresses.
     * @param {AdressDeleteManyArgs} args - Arguments to filter Adresses to delete.
     * @example
     * // Delete a few Adresses
     * const { count } = await prisma.adress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdressDeleteManyArgs>(args?: SelectSubset<T, AdressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Adresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Adresses
     * const adress = await prisma.adress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdressUpdateManyArgs>(args: SelectSubset<T, AdressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Adresses and returns the data updated in the database.
     * @param {AdressUpdateManyAndReturnArgs} args - Arguments to update many Adresses.
     * @example
     * // Update many Adresses
     * const adress = await prisma.adress.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Adresses and only return the `id`
     * const adressWithIdOnly = await prisma.adress.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AdressUpdateManyAndReturnArgs>(args: SelectSubset<T, AdressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Adress.
     * @param {AdressUpsertArgs} args - Arguments to update or create a Adress.
     * @example
     * // Update or create a Adress
     * const adress = await prisma.adress.upsert({
     *   create: {
     *     // ... data to create a Adress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Adress we want to update
     *   }
     * })
     */
    upsert<T extends AdressUpsertArgs>(args: SelectSubset<T, AdressUpsertArgs<ExtArgs>>): Prisma__AdressClient<$Result.GetResult<Prisma.$AdressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Adresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdressCountArgs} args - Arguments to filter Adresses to count.
     * @example
     * // Count the number of Adresses
     * const count = await prisma.adress.count({
     *   where: {
     *     // ... the filter for the Adresses we want to count
     *   }
     * })
    **/
    count<T extends AdressCountArgs>(
      args?: Subset<T, AdressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Adress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdressAggregateArgs>(args: Subset<T, AdressAggregateArgs>): Prisma.PrismaPromise<GetAdressAggregateType<T>>

    /**
     * Group by Adress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdressGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdressGroupByArgs['orderBy'] }
        : { orderBy?: AdressGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
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
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Adress model
   */
  readonly fields: AdressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Adress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Adress$userArgs<ExtArgs> = {}>(args?: Subset<T, Adress$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    order<T extends Adress$orderArgs<ExtArgs> = {}>(args?: Subset<T, Adress$orderArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Adress model
   */
  interface AdressFieldRefs {
    readonly id: FieldRef<"Adress", 'Int'>
    readonly postDepartament: FieldRef<"Adress", 'String'>
    readonly street: FieldRef<"Adress", 'String'>
    readonly home: FieldRef<"Adress", 'String'>
    readonly appartament: FieldRef<"Adress", 'Int'>
    readonly entrants: FieldRef<"Adress", 'Int'>
    readonly userId: FieldRef<"Adress", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Adress findUnique
   */
  export type AdressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adress
     */
    select?: AdressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adress
     */
    omit?: AdressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdressInclude<ExtArgs> | null
    /**
     * Filter, which Adress to fetch.
     */
    where: AdressWhereUniqueInput
  }

  /**
   * Adress findUniqueOrThrow
   */
  export type AdressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adress
     */
    select?: AdressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adress
     */
    omit?: AdressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdressInclude<ExtArgs> | null
    /**
     * Filter, which Adress to fetch.
     */
    where: AdressWhereUniqueInput
  }

  /**
   * Adress findFirst
   */
  export type AdressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adress
     */
    select?: AdressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adress
     */
    omit?: AdressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdressInclude<ExtArgs> | null
    /**
     * Filter, which Adress to fetch.
     */
    where?: AdressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Adresses to fetch.
     */
    orderBy?: AdressOrderByWithRelationInput | AdressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Adresses.
     */
    cursor?: AdressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Adresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Adresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Adresses.
     */
    distinct?: AdressScalarFieldEnum | AdressScalarFieldEnum[]
  }

  /**
   * Adress findFirstOrThrow
   */
  export type AdressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adress
     */
    select?: AdressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adress
     */
    omit?: AdressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdressInclude<ExtArgs> | null
    /**
     * Filter, which Adress to fetch.
     */
    where?: AdressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Adresses to fetch.
     */
    orderBy?: AdressOrderByWithRelationInput | AdressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Adresses.
     */
    cursor?: AdressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Adresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Adresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Adresses.
     */
    distinct?: AdressScalarFieldEnum | AdressScalarFieldEnum[]
  }

  /**
   * Adress findMany
   */
  export type AdressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adress
     */
    select?: AdressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adress
     */
    omit?: AdressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdressInclude<ExtArgs> | null
    /**
     * Filter, which Adresses to fetch.
     */
    where?: AdressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Adresses to fetch.
     */
    orderBy?: AdressOrderByWithRelationInput | AdressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Adresses.
     */
    cursor?: AdressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Adresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Adresses.
     */
    skip?: number
    distinct?: AdressScalarFieldEnum | AdressScalarFieldEnum[]
  }

  /**
   * Adress create
   */
  export type AdressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adress
     */
    select?: AdressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adress
     */
    omit?: AdressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdressInclude<ExtArgs> | null
    /**
     * The data needed to create a Adress.
     */
    data: XOR<AdressCreateInput, AdressUncheckedCreateInput>
  }

  /**
   * Adress createMany
   */
  export type AdressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Adresses.
     */
    data: AdressCreateManyInput | AdressCreateManyInput[]
  }

  /**
   * Adress createManyAndReturn
   */
  export type AdressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adress
     */
    select?: AdressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Adress
     */
    omit?: AdressOmit<ExtArgs> | null
    /**
     * The data used to create many Adresses.
     */
    data: AdressCreateManyInput | AdressCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdressIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Adress update
   */
  export type AdressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adress
     */
    select?: AdressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adress
     */
    omit?: AdressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdressInclude<ExtArgs> | null
    /**
     * The data needed to update a Adress.
     */
    data: XOR<AdressUpdateInput, AdressUncheckedUpdateInput>
    /**
     * Choose, which Adress to update.
     */
    where: AdressWhereUniqueInput
  }

  /**
   * Adress updateMany
   */
  export type AdressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Adresses.
     */
    data: XOR<AdressUpdateManyMutationInput, AdressUncheckedUpdateManyInput>
    /**
     * Filter which Adresses to update
     */
    where?: AdressWhereInput
    /**
     * Limit how many Adresses to update.
     */
    limit?: number
  }

  /**
   * Adress updateManyAndReturn
   */
  export type AdressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adress
     */
    select?: AdressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Adress
     */
    omit?: AdressOmit<ExtArgs> | null
    /**
     * The data used to update Adresses.
     */
    data: XOR<AdressUpdateManyMutationInput, AdressUncheckedUpdateManyInput>
    /**
     * Filter which Adresses to update
     */
    where?: AdressWhereInput
    /**
     * Limit how many Adresses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdressIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Adress upsert
   */
  export type AdressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adress
     */
    select?: AdressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adress
     */
    omit?: AdressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdressInclude<ExtArgs> | null
    /**
     * The filter to search for the Adress to update in case it exists.
     */
    where: AdressWhereUniqueInput
    /**
     * In case the Adress found by the `where` argument doesn't exist, create a new Adress with this data.
     */
    create: XOR<AdressCreateInput, AdressUncheckedCreateInput>
    /**
     * In case the Adress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdressUpdateInput, AdressUncheckedUpdateInput>
  }

  /**
   * Adress delete
   */
  export type AdressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adress
     */
    select?: AdressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adress
     */
    omit?: AdressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdressInclude<ExtArgs> | null
    /**
     * Filter which Adress to delete.
     */
    where: AdressWhereUniqueInput
  }

  /**
   * Adress deleteMany
   */
  export type AdressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Adresses to delete
     */
    where?: AdressWhereInput
    /**
     * Limit how many Adresses to delete.
     */
    limit?: number
  }

  /**
   * Adress.user
   */
  export type Adress$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Adress.order
   */
  export type Adress$orderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Adress without action
   */
  export type AdressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adress
     */
    select?: AdressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adress
     */
    omit?: AdressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdressInclude<ExtArgs> | null
  }


  /**
   * Model UserInfo
   */

  export type AggregateUserInfo = {
    _count: UserInfoCountAggregateOutputType | null
    _avg: UserInfoAvgAggregateOutputType | null
    _sum: UserInfoSumAggregateOutputType | null
    _min: UserInfoMinAggregateOutputType | null
    _max: UserInfoMaxAggregateOutputType | null
  }

  export type UserInfoAvgAggregateOutputType = {
    id: number | null
    phoneNumber: number | null
    userId: number | null
  }

  export type UserInfoSumAggregateOutputType = {
    id: number | null
    phoneNumber: number | null
    userId: number | null
  }

  export type UserInfoMinAggregateOutputType = {
    id: number | null
    name: string | null
    surname: string | null
    middleName: string | null
    birthday: Date | null
    phoneNumber: number | null
    userId: number | null
  }

  export type UserInfoMaxAggregateOutputType = {
    id: number | null
    name: string | null
    surname: string | null
    middleName: string | null
    birthday: Date | null
    phoneNumber: number | null
    userId: number | null
  }

  export type UserInfoCountAggregateOutputType = {
    id: number
    name: number
    surname: number
    middleName: number
    birthday: number
    phoneNumber: number
    userId: number
    _all: number
  }


  export type UserInfoAvgAggregateInputType = {
    id?: true
    phoneNumber?: true
    userId?: true
  }

  export type UserInfoSumAggregateInputType = {
    id?: true
    phoneNumber?: true
    userId?: true
  }

  export type UserInfoMinAggregateInputType = {
    id?: true
    name?: true
    surname?: true
    middleName?: true
    birthday?: true
    phoneNumber?: true
    userId?: true
  }

  export type UserInfoMaxAggregateInputType = {
    id?: true
    name?: true
    surname?: true
    middleName?: true
    birthday?: true
    phoneNumber?: true
    userId?: true
  }

  export type UserInfoCountAggregateInputType = {
    id?: true
    name?: true
    surname?: true
    middleName?: true
    birthday?: true
    phoneNumber?: true
    userId?: true
    _all?: true
  }

  export type UserInfoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserInfo to aggregate.
     */
    where?: UserInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserInfos to fetch.
     */
    orderBy?: UserInfoOrderByWithRelationInput | UserInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserInfos
    **/
    _count?: true | UserInfoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserInfoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserInfoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserInfoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserInfoMaxAggregateInputType
  }

  export type GetUserInfoAggregateType<T extends UserInfoAggregateArgs> = {
        [P in keyof T & keyof AggregateUserInfo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserInfo[P]>
      : GetScalarType<T[P], AggregateUserInfo[P]>
  }




  export type UserInfoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserInfoWhereInput
    orderBy?: UserInfoOrderByWithAggregationInput | UserInfoOrderByWithAggregationInput[]
    by: UserInfoScalarFieldEnum[] | UserInfoScalarFieldEnum
    having?: UserInfoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserInfoCountAggregateInputType | true
    _avg?: UserInfoAvgAggregateInputType
    _sum?: UserInfoSumAggregateInputType
    _min?: UserInfoMinAggregateInputType
    _max?: UserInfoMaxAggregateInputType
  }

  export type UserInfoGroupByOutputType = {
    id: number
    name: string
    surname: string
    middleName: string
    birthday: Date
    phoneNumber: number
    userId: number
    _count: UserInfoCountAggregateOutputType | null
    _avg: UserInfoAvgAggregateOutputType | null
    _sum: UserInfoSumAggregateOutputType | null
    _min: UserInfoMinAggregateOutputType | null
    _max: UserInfoMaxAggregateOutputType | null
  }

  type GetUserInfoGroupByPayload<T extends UserInfoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserInfoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserInfoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserInfoGroupByOutputType[P]>
            : GetScalarType<T[P], UserInfoGroupByOutputType[P]>
        }
      >
    >


  export type UserInfoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    surname?: boolean
    middleName?: boolean
    birthday?: boolean
    phoneNumber?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userInfo"]>

  export type UserInfoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    surname?: boolean
    middleName?: boolean
    birthday?: boolean
    phoneNumber?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userInfo"]>

  export type UserInfoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    surname?: boolean
    middleName?: boolean
    birthday?: boolean
    phoneNumber?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userInfo"]>

  export type UserInfoSelectScalar = {
    id?: boolean
    name?: boolean
    surname?: boolean
    middleName?: boolean
    birthday?: boolean
    phoneNumber?: boolean
    userId?: boolean
  }

  export type UserInfoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "surname" | "middleName" | "birthday" | "phoneNumber" | "userId", ExtArgs["result"]["userInfo"]>
  export type UserInfoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserInfoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserInfoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserInfoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserInfo"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      surname: string
      middleName: string
      birthday: Date
      phoneNumber: number
      userId: number
    }, ExtArgs["result"]["userInfo"]>
    composites: {}
  }

  type UserInfoGetPayload<S extends boolean | null | undefined | UserInfoDefaultArgs> = $Result.GetResult<Prisma.$UserInfoPayload, S>

  type UserInfoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserInfoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserInfoCountAggregateInputType | true
    }

  export interface UserInfoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserInfo'], meta: { name: 'UserInfo' } }
    /**
     * Find zero or one UserInfo that matches the filter.
     * @param {UserInfoFindUniqueArgs} args - Arguments to find a UserInfo
     * @example
     * // Get one UserInfo
     * const userInfo = await prisma.userInfo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserInfoFindUniqueArgs>(args: SelectSubset<T, UserInfoFindUniqueArgs<ExtArgs>>): Prisma__UserInfoClient<$Result.GetResult<Prisma.$UserInfoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserInfo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserInfoFindUniqueOrThrowArgs} args - Arguments to find a UserInfo
     * @example
     * // Get one UserInfo
     * const userInfo = await prisma.userInfo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserInfoFindUniqueOrThrowArgs>(args: SelectSubset<T, UserInfoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserInfoClient<$Result.GetResult<Prisma.$UserInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserInfo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInfoFindFirstArgs} args - Arguments to find a UserInfo
     * @example
     * // Get one UserInfo
     * const userInfo = await prisma.userInfo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserInfoFindFirstArgs>(args?: SelectSubset<T, UserInfoFindFirstArgs<ExtArgs>>): Prisma__UserInfoClient<$Result.GetResult<Prisma.$UserInfoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserInfo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInfoFindFirstOrThrowArgs} args - Arguments to find a UserInfo
     * @example
     * // Get one UserInfo
     * const userInfo = await prisma.userInfo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserInfoFindFirstOrThrowArgs>(args?: SelectSubset<T, UserInfoFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserInfoClient<$Result.GetResult<Prisma.$UserInfoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserInfos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInfoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserInfos
     * const userInfos = await prisma.userInfo.findMany()
     * 
     * // Get first 10 UserInfos
     * const userInfos = await prisma.userInfo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userInfoWithIdOnly = await prisma.userInfo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserInfoFindManyArgs>(args?: SelectSubset<T, UserInfoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserInfoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserInfo.
     * @param {UserInfoCreateArgs} args - Arguments to create a UserInfo.
     * @example
     * // Create one UserInfo
     * const UserInfo = await prisma.userInfo.create({
     *   data: {
     *     // ... data to create a UserInfo
     *   }
     * })
     * 
     */
    create<T extends UserInfoCreateArgs>(args: SelectSubset<T, UserInfoCreateArgs<ExtArgs>>): Prisma__UserInfoClient<$Result.GetResult<Prisma.$UserInfoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserInfos.
     * @param {UserInfoCreateManyArgs} args - Arguments to create many UserInfos.
     * @example
     * // Create many UserInfos
     * const userInfo = await prisma.userInfo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserInfoCreateManyArgs>(args?: SelectSubset<T, UserInfoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserInfos and returns the data saved in the database.
     * @param {UserInfoCreateManyAndReturnArgs} args - Arguments to create many UserInfos.
     * @example
     * // Create many UserInfos
     * const userInfo = await prisma.userInfo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserInfos and only return the `id`
     * const userInfoWithIdOnly = await prisma.userInfo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserInfoCreateManyAndReturnArgs>(args?: SelectSubset<T, UserInfoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserInfoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserInfo.
     * @param {UserInfoDeleteArgs} args - Arguments to delete one UserInfo.
     * @example
     * // Delete one UserInfo
     * const UserInfo = await prisma.userInfo.delete({
     *   where: {
     *     // ... filter to delete one UserInfo
     *   }
     * })
     * 
     */
    delete<T extends UserInfoDeleteArgs>(args: SelectSubset<T, UserInfoDeleteArgs<ExtArgs>>): Prisma__UserInfoClient<$Result.GetResult<Prisma.$UserInfoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserInfo.
     * @param {UserInfoUpdateArgs} args - Arguments to update one UserInfo.
     * @example
     * // Update one UserInfo
     * const userInfo = await prisma.userInfo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserInfoUpdateArgs>(args: SelectSubset<T, UserInfoUpdateArgs<ExtArgs>>): Prisma__UserInfoClient<$Result.GetResult<Prisma.$UserInfoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserInfos.
     * @param {UserInfoDeleteManyArgs} args - Arguments to filter UserInfos to delete.
     * @example
     * // Delete a few UserInfos
     * const { count } = await prisma.userInfo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserInfoDeleteManyArgs>(args?: SelectSubset<T, UserInfoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInfoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserInfos
     * const userInfo = await prisma.userInfo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserInfoUpdateManyArgs>(args: SelectSubset<T, UserInfoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserInfos and returns the data updated in the database.
     * @param {UserInfoUpdateManyAndReturnArgs} args - Arguments to update many UserInfos.
     * @example
     * // Update many UserInfos
     * const userInfo = await prisma.userInfo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserInfos and only return the `id`
     * const userInfoWithIdOnly = await prisma.userInfo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserInfoUpdateManyAndReturnArgs>(args: SelectSubset<T, UserInfoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserInfoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserInfo.
     * @param {UserInfoUpsertArgs} args - Arguments to update or create a UserInfo.
     * @example
     * // Update or create a UserInfo
     * const userInfo = await prisma.userInfo.upsert({
     *   create: {
     *     // ... data to create a UserInfo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserInfo we want to update
     *   }
     * })
     */
    upsert<T extends UserInfoUpsertArgs>(args: SelectSubset<T, UserInfoUpsertArgs<ExtArgs>>): Prisma__UserInfoClient<$Result.GetResult<Prisma.$UserInfoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInfoCountArgs} args - Arguments to filter UserInfos to count.
     * @example
     * // Count the number of UserInfos
     * const count = await prisma.userInfo.count({
     *   where: {
     *     // ... the filter for the UserInfos we want to count
     *   }
     * })
    **/
    count<T extends UserInfoCountArgs>(
      args?: Subset<T, UserInfoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserInfoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInfoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserInfoAggregateArgs>(args: Subset<T, UserInfoAggregateArgs>): Prisma.PrismaPromise<GetUserInfoAggregateType<T>>

    /**
     * Group by UserInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInfoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserInfoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserInfoGroupByArgs['orderBy'] }
        : { orderBy?: UserInfoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
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
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserInfoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserInfoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserInfo model
   */
  readonly fields: UserInfoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserInfo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserInfoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserInfo model
   */
  interface UserInfoFieldRefs {
    readonly id: FieldRef<"UserInfo", 'Int'>
    readonly name: FieldRef<"UserInfo", 'String'>
    readonly surname: FieldRef<"UserInfo", 'String'>
    readonly middleName: FieldRef<"UserInfo", 'String'>
    readonly birthday: FieldRef<"UserInfo", 'DateTime'>
    readonly phoneNumber: FieldRef<"UserInfo", 'Int'>
    readonly userId: FieldRef<"UserInfo", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * UserInfo findUnique
   */
  export type UserInfoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInfo
     */
    select?: UserInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInfo
     */
    omit?: UserInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInfoInclude<ExtArgs> | null
    /**
     * Filter, which UserInfo to fetch.
     */
    where: UserInfoWhereUniqueInput
  }

  /**
   * UserInfo findUniqueOrThrow
   */
  export type UserInfoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInfo
     */
    select?: UserInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInfo
     */
    omit?: UserInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInfoInclude<ExtArgs> | null
    /**
     * Filter, which UserInfo to fetch.
     */
    where: UserInfoWhereUniqueInput
  }

  /**
   * UserInfo findFirst
   */
  export type UserInfoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInfo
     */
    select?: UserInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInfo
     */
    omit?: UserInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInfoInclude<ExtArgs> | null
    /**
     * Filter, which UserInfo to fetch.
     */
    where?: UserInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserInfos to fetch.
     */
    orderBy?: UserInfoOrderByWithRelationInput | UserInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserInfos.
     */
    cursor?: UserInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserInfos.
     */
    distinct?: UserInfoScalarFieldEnum | UserInfoScalarFieldEnum[]
  }

  /**
   * UserInfo findFirstOrThrow
   */
  export type UserInfoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInfo
     */
    select?: UserInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInfo
     */
    omit?: UserInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInfoInclude<ExtArgs> | null
    /**
     * Filter, which UserInfo to fetch.
     */
    where?: UserInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserInfos to fetch.
     */
    orderBy?: UserInfoOrderByWithRelationInput | UserInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserInfos.
     */
    cursor?: UserInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserInfos.
     */
    distinct?: UserInfoScalarFieldEnum | UserInfoScalarFieldEnum[]
  }

  /**
   * UserInfo findMany
   */
  export type UserInfoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInfo
     */
    select?: UserInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInfo
     */
    omit?: UserInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInfoInclude<ExtArgs> | null
    /**
     * Filter, which UserInfos to fetch.
     */
    where?: UserInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserInfos to fetch.
     */
    orderBy?: UserInfoOrderByWithRelationInput | UserInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserInfos.
     */
    cursor?: UserInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserInfos.
     */
    skip?: number
    distinct?: UserInfoScalarFieldEnum | UserInfoScalarFieldEnum[]
  }

  /**
   * UserInfo create
   */
  export type UserInfoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInfo
     */
    select?: UserInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInfo
     */
    omit?: UserInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInfoInclude<ExtArgs> | null
    /**
     * The data needed to create a UserInfo.
     */
    data: XOR<UserInfoCreateInput, UserInfoUncheckedCreateInput>
  }

  /**
   * UserInfo createMany
   */
  export type UserInfoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserInfos.
     */
    data: UserInfoCreateManyInput | UserInfoCreateManyInput[]
  }

  /**
   * UserInfo createManyAndReturn
   */
  export type UserInfoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInfo
     */
    select?: UserInfoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserInfo
     */
    omit?: UserInfoOmit<ExtArgs> | null
    /**
     * The data used to create many UserInfos.
     */
    data: UserInfoCreateManyInput | UserInfoCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInfoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserInfo update
   */
  export type UserInfoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInfo
     */
    select?: UserInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInfo
     */
    omit?: UserInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInfoInclude<ExtArgs> | null
    /**
     * The data needed to update a UserInfo.
     */
    data: XOR<UserInfoUpdateInput, UserInfoUncheckedUpdateInput>
    /**
     * Choose, which UserInfo to update.
     */
    where: UserInfoWhereUniqueInput
  }

  /**
   * UserInfo updateMany
   */
  export type UserInfoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserInfos.
     */
    data: XOR<UserInfoUpdateManyMutationInput, UserInfoUncheckedUpdateManyInput>
    /**
     * Filter which UserInfos to update
     */
    where?: UserInfoWhereInput
    /**
     * Limit how many UserInfos to update.
     */
    limit?: number
  }

  /**
   * UserInfo updateManyAndReturn
   */
  export type UserInfoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInfo
     */
    select?: UserInfoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserInfo
     */
    omit?: UserInfoOmit<ExtArgs> | null
    /**
     * The data used to update UserInfos.
     */
    data: XOR<UserInfoUpdateManyMutationInput, UserInfoUncheckedUpdateManyInput>
    /**
     * Filter which UserInfos to update
     */
    where?: UserInfoWhereInput
    /**
     * Limit how many UserInfos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInfoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserInfo upsert
   */
  export type UserInfoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInfo
     */
    select?: UserInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInfo
     */
    omit?: UserInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInfoInclude<ExtArgs> | null
    /**
     * The filter to search for the UserInfo to update in case it exists.
     */
    where: UserInfoWhereUniqueInput
    /**
     * In case the UserInfo found by the `where` argument doesn't exist, create a new UserInfo with this data.
     */
    create: XOR<UserInfoCreateInput, UserInfoUncheckedCreateInput>
    /**
     * In case the UserInfo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserInfoUpdateInput, UserInfoUncheckedUpdateInput>
  }

  /**
   * UserInfo delete
   */
  export type UserInfoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInfo
     */
    select?: UserInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInfo
     */
    omit?: UserInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInfoInclude<ExtArgs> | null
    /**
     * Filter which UserInfo to delete.
     */
    where: UserInfoWhereUniqueInput
  }

  /**
   * UserInfo deleteMany
   */
  export type UserInfoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserInfos to delete
     */
    where?: UserInfoWhereInput
    /**
     * Limit how many UserInfos to delete.
     */
    limit?: number
  }

  /**
   * UserInfo without action
   */
  export type UserInfoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInfo
     */
    select?: UserInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInfo
     */
    omit?: UserInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInfoInclude<ExtArgs> | null
  }


  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    id: number | null
    totalPrice: number | null
    userId: number | null
    userAdressId: number | null
  }

  export type OrderSumAggregateOutputType = {
    id: number | null
    totalPrice: number | null
    userId: number | null
    userAdressId: number | null
  }

  export type OrderMinAggregateOutputType = {
    id: number | null
    totalPrice: number | null
    status: string | null
    createdAt: string | null
    userId: number | null
    userAdressId: number | null
  }

  export type OrderMaxAggregateOutputType = {
    id: number | null
    totalPrice: number | null
    status: string | null
    createdAt: string | null
    userId: number | null
    userAdressId: number | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    totalPrice: number
    status: number
    createdAt: number
    userId: number
    userAdressId: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    id?: true
    totalPrice?: true
    userId?: true
    userAdressId?: true
  }

  export type OrderSumAggregateInputType = {
    id?: true
    totalPrice?: true
    userId?: true
    userAdressId?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    totalPrice?: true
    status?: true
    createdAt?: true
    userId?: true
    userAdressId?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    totalPrice?: true
    status?: true
    createdAt?: true
    userId?: true
    userAdressId?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    totalPrice?: true
    status?: true
    createdAt?: true
    userId?: true
    userAdressId?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: number
    totalPrice: number
    status: string
    createdAt: string
    userId: number
    userAdressId: number
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    totalPrice?: boolean
    status?: boolean
    createdAt?: boolean
    userId?: boolean
    userAdressId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    userAdress?: boolean | Order$userAdressArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    totalPrice?: boolean
    status?: boolean
    createdAt?: boolean
    userId?: boolean
    userAdressId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    userAdress?: boolean | Order$userAdressArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    totalPrice?: boolean
    status?: boolean
    createdAt?: boolean
    userId?: boolean
    userAdressId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    userAdress?: boolean | Order$userAdressArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectScalar = {
    id?: boolean
    totalPrice?: boolean
    status?: boolean
    createdAt?: boolean
    userId?: boolean
    userAdressId?: boolean
  }

  export type OrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "totalPrice" | "status" | "createdAt" | "userId" | "userAdressId", ExtArgs["result"]["order"]>
  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    userAdress?: boolean | Order$userAdressArgs<ExtArgs>
  }
  export type OrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    userAdress?: boolean | Order$userAdressArgs<ExtArgs>
  }
  export type OrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    userAdress?: boolean | Order$userAdressArgs<ExtArgs>
  }

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      userAdress: Prisma.$AdressPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      totalPrice: number
      status: string
      createdAt: string
      userId: number
      userAdressId: number
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderFindManyArgs>(args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends OrderCreateArgs>(args: SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderCreateManyArgs>(args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrderCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends OrderDeleteArgs>(args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderUpdateArgs>(args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderUpdateManyArgs>(args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {OrderUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrderUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
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
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    userAdress<T extends Order$userAdressArgs<ExtArgs> = {}>(args?: Subset<T, Order$userAdressArgs<ExtArgs>>): Prisma__AdressClient<$Result.GetResult<Prisma.$AdressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Order model
   */
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'Int'>
    readonly totalPrice: FieldRef<"Order", 'Int'>
    readonly status: FieldRef<"Order", 'String'>
    readonly createdAt: FieldRef<"Order", 'String'>
    readonly userId: FieldRef<"Order", 'Int'>
    readonly userAdressId: FieldRef<"Order", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
  }

  /**
   * Order createManyAndReturn
   */
  export type OrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Order updateManyAndReturn
   */
  export type OrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
  }

  /**
   * Order.userAdress
   */
  export type Order$userAdressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adress
     */
    select?: AdressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adress
     */
    omit?: AdressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdressInclude<ExtArgs> | null
    where?: AdressWhereInput
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
  }


  /**
   * Model OrderProduct
   */

  export type AggregateOrderProduct = {
    _count: OrderProductCountAggregateOutputType | null
    _avg: OrderProductAvgAggregateOutputType | null
    _sum: OrderProductSumAggregateOutputType | null
    _min: OrderProductMinAggregateOutputType | null
    _max: OrderProductMaxAggregateOutputType | null
  }

  export type OrderProductAvgAggregateOutputType = {
    id: number | null
    amount: number | null
    priceInPurchase: number | null
    productId: number | null
  }

  export type OrderProductSumAggregateOutputType = {
    id: number | null
    amount: number | null
    priceInPurchase: number | null
    productId: number | null
  }

  export type OrderProductMinAggregateOutputType = {
    id: number | null
    amount: number | null
    priceInPurchase: number | null
    productId: number | null
  }

  export type OrderProductMaxAggregateOutputType = {
    id: number | null
    amount: number | null
    priceInPurchase: number | null
    productId: number | null
  }

  export type OrderProductCountAggregateOutputType = {
    id: number
    amount: number
    priceInPurchase: number
    productId: number
    _all: number
  }


  export type OrderProductAvgAggregateInputType = {
    id?: true
    amount?: true
    priceInPurchase?: true
    productId?: true
  }

  export type OrderProductSumAggregateInputType = {
    id?: true
    amount?: true
    priceInPurchase?: true
    productId?: true
  }

  export type OrderProductMinAggregateInputType = {
    id?: true
    amount?: true
    priceInPurchase?: true
    productId?: true
  }

  export type OrderProductMaxAggregateInputType = {
    id?: true
    amount?: true
    priceInPurchase?: true
    productId?: true
  }

  export type OrderProductCountAggregateInputType = {
    id?: true
    amount?: true
    priceInPurchase?: true
    productId?: true
    _all?: true
  }

  export type OrderProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderProduct to aggregate.
     */
    where?: OrderProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderProducts to fetch.
     */
    orderBy?: OrderProductOrderByWithRelationInput | OrderProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderProducts
    **/
    _count?: true | OrderProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderProductMaxAggregateInputType
  }

  export type GetOrderProductAggregateType<T extends OrderProductAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderProduct[P]>
      : GetScalarType<T[P], AggregateOrderProduct[P]>
  }




  export type OrderProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderProductWhereInput
    orderBy?: OrderProductOrderByWithAggregationInput | OrderProductOrderByWithAggregationInput[]
    by: OrderProductScalarFieldEnum[] | OrderProductScalarFieldEnum
    having?: OrderProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderProductCountAggregateInputType | true
    _avg?: OrderProductAvgAggregateInputType
    _sum?: OrderProductSumAggregateInputType
    _min?: OrderProductMinAggregateInputType
    _max?: OrderProductMaxAggregateInputType
  }

  export type OrderProductGroupByOutputType = {
    id: number
    amount: number
    priceInPurchase: number
    productId: number
    _count: OrderProductCountAggregateOutputType | null
    _avg: OrderProductAvgAggregateOutputType | null
    _sum: OrderProductSumAggregateOutputType | null
    _min: OrderProductMinAggregateOutputType | null
    _max: OrderProductMaxAggregateOutputType | null
  }

  type GetOrderProductGroupByPayload<T extends OrderProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderProductGroupByOutputType[P]>
            : GetScalarType<T[P], OrderProductGroupByOutputType[P]>
        }
      >
    >


  export type OrderProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    priceInPurchase?: boolean
    productId?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderProduct"]>

  export type OrderProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    priceInPurchase?: boolean
    productId?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderProduct"]>

  export type OrderProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    priceInPurchase?: boolean
    productId?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderProduct"]>

  export type OrderProductSelectScalar = {
    id?: boolean
    amount?: boolean
    priceInPurchase?: boolean
    productId?: boolean
  }

  export type OrderProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "amount" | "priceInPurchase" | "productId", ExtArgs["result"]["orderProduct"]>
  export type OrderProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type OrderProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type OrderProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $OrderProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderProduct"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      amount: number
      priceInPurchase: number
      productId: number
    }, ExtArgs["result"]["orderProduct"]>
    composites: {}
  }

  type OrderProductGetPayload<S extends boolean | null | undefined | OrderProductDefaultArgs> = $Result.GetResult<Prisma.$OrderProductPayload, S>

  type OrderProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderProductCountAggregateInputType | true
    }

  export interface OrderProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderProduct'], meta: { name: 'OrderProduct' } }
    /**
     * Find zero or one OrderProduct that matches the filter.
     * @param {OrderProductFindUniqueArgs} args - Arguments to find a OrderProduct
     * @example
     * // Get one OrderProduct
     * const orderProduct = await prisma.orderProduct.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderProductFindUniqueArgs>(args: SelectSubset<T, OrderProductFindUniqueArgs<ExtArgs>>): Prisma__OrderProductClient<$Result.GetResult<Prisma.$OrderProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrderProduct that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderProductFindUniqueOrThrowArgs} args - Arguments to find a OrderProduct
     * @example
     * // Get one OrderProduct
     * const orderProduct = await prisma.orderProduct.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderProductFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderProductClient<$Result.GetResult<Prisma.$OrderProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderProduct that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderProductFindFirstArgs} args - Arguments to find a OrderProduct
     * @example
     * // Get one OrderProduct
     * const orderProduct = await prisma.orderProduct.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderProductFindFirstArgs>(args?: SelectSubset<T, OrderProductFindFirstArgs<ExtArgs>>): Prisma__OrderProductClient<$Result.GetResult<Prisma.$OrderProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderProduct that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderProductFindFirstOrThrowArgs} args - Arguments to find a OrderProduct
     * @example
     * // Get one OrderProduct
     * const orderProduct = await prisma.orderProduct.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderProductFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderProductClient<$Result.GetResult<Prisma.$OrderProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrderProducts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderProducts
     * const orderProducts = await prisma.orderProduct.findMany()
     * 
     * // Get first 10 OrderProducts
     * const orderProducts = await prisma.orderProduct.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderProductWithIdOnly = await prisma.orderProduct.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderProductFindManyArgs>(args?: SelectSubset<T, OrderProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrderProduct.
     * @param {OrderProductCreateArgs} args - Arguments to create a OrderProduct.
     * @example
     * // Create one OrderProduct
     * const OrderProduct = await prisma.orderProduct.create({
     *   data: {
     *     // ... data to create a OrderProduct
     *   }
     * })
     * 
     */
    create<T extends OrderProductCreateArgs>(args: SelectSubset<T, OrderProductCreateArgs<ExtArgs>>): Prisma__OrderProductClient<$Result.GetResult<Prisma.$OrderProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrderProducts.
     * @param {OrderProductCreateManyArgs} args - Arguments to create many OrderProducts.
     * @example
     * // Create many OrderProducts
     * const orderProduct = await prisma.orderProduct.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderProductCreateManyArgs>(args?: SelectSubset<T, OrderProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrderProducts and returns the data saved in the database.
     * @param {OrderProductCreateManyAndReturnArgs} args - Arguments to create many OrderProducts.
     * @example
     * // Create many OrderProducts
     * const orderProduct = await prisma.orderProduct.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrderProducts and only return the `id`
     * const orderProductWithIdOnly = await prisma.orderProduct.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderProductCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OrderProduct.
     * @param {OrderProductDeleteArgs} args - Arguments to delete one OrderProduct.
     * @example
     * // Delete one OrderProduct
     * const OrderProduct = await prisma.orderProduct.delete({
     *   where: {
     *     // ... filter to delete one OrderProduct
     *   }
     * })
     * 
     */
    delete<T extends OrderProductDeleteArgs>(args: SelectSubset<T, OrderProductDeleteArgs<ExtArgs>>): Prisma__OrderProductClient<$Result.GetResult<Prisma.$OrderProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrderProduct.
     * @param {OrderProductUpdateArgs} args - Arguments to update one OrderProduct.
     * @example
     * // Update one OrderProduct
     * const orderProduct = await prisma.orderProduct.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderProductUpdateArgs>(args: SelectSubset<T, OrderProductUpdateArgs<ExtArgs>>): Prisma__OrderProductClient<$Result.GetResult<Prisma.$OrderProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrderProducts.
     * @param {OrderProductDeleteManyArgs} args - Arguments to filter OrderProducts to delete.
     * @example
     * // Delete a few OrderProducts
     * const { count } = await prisma.orderProduct.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderProductDeleteManyArgs>(args?: SelectSubset<T, OrderProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderProducts
     * const orderProduct = await prisma.orderProduct.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderProductUpdateManyArgs>(args: SelectSubset<T, OrderProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderProducts and returns the data updated in the database.
     * @param {OrderProductUpdateManyAndReturnArgs} args - Arguments to update many OrderProducts.
     * @example
     * // Update many OrderProducts
     * const orderProduct = await prisma.orderProduct.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OrderProducts and only return the `id`
     * const orderProductWithIdOnly = await prisma.orderProduct.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrderProductUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OrderProduct.
     * @param {OrderProductUpsertArgs} args - Arguments to update or create a OrderProduct.
     * @example
     * // Update or create a OrderProduct
     * const orderProduct = await prisma.orderProduct.upsert({
     *   create: {
     *     // ... data to create a OrderProduct
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderProduct we want to update
     *   }
     * })
     */
    upsert<T extends OrderProductUpsertArgs>(args: SelectSubset<T, OrderProductUpsertArgs<ExtArgs>>): Prisma__OrderProductClient<$Result.GetResult<Prisma.$OrderProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrderProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderProductCountArgs} args - Arguments to filter OrderProducts to count.
     * @example
     * // Count the number of OrderProducts
     * const count = await prisma.orderProduct.count({
     *   where: {
     *     // ... the filter for the OrderProducts we want to count
     *   }
     * })
    **/
    count<T extends OrderProductCountArgs>(
      args?: Subset<T, OrderProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderProductAggregateArgs>(args: Subset<T, OrderProductAggregateArgs>): Prisma.PrismaPromise<GetOrderProductAggregateType<T>>

    /**
     * Group by OrderProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderProductGroupByArgs['orderBy'] }
        : { orderBy?: OrderProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
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
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderProduct model
   */
  readonly fields: OrderProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderProduct.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OrderProduct model
   */
  interface OrderProductFieldRefs {
    readonly id: FieldRef<"OrderProduct", 'Int'>
    readonly amount: FieldRef<"OrderProduct", 'Int'>
    readonly priceInPurchase: FieldRef<"OrderProduct", 'Int'>
    readonly productId: FieldRef<"OrderProduct", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * OrderProduct findUnique
   */
  export type OrderProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderProduct
     */
    select?: OrderProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderProduct
     */
    omit?: OrderProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderProductInclude<ExtArgs> | null
    /**
     * Filter, which OrderProduct to fetch.
     */
    where: OrderProductWhereUniqueInput
  }

  /**
   * OrderProduct findUniqueOrThrow
   */
  export type OrderProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderProduct
     */
    select?: OrderProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderProduct
     */
    omit?: OrderProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderProductInclude<ExtArgs> | null
    /**
     * Filter, which OrderProduct to fetch.
     */
    where: OrderProductWhereUniqueInput
  }

  /**
   * OrderProduct findFirst
   */
  export type OrderProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderProduct
     */
    select?: OrderProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderProduct
     */
    omit?: OrderProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderProductInclude<ExtArgs> | null
    /**
     * Filter, which OrderProduct to fetch.
     */
    where?: OrderProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderProducts to fetch.
     */
    orderBy?: OrderProductOrderByWithRelationInput | OrderProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderProducts.
     */
    cursor?: OrderProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderProducts.
     */
    distinct?: OrderProductScalarFieldEnum | OrderProductScalarFieldEnum[]
  }

  /**
   * OrderProduct findFirstOrThrow
   */
  export type OrderProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderProduct
     */
    select?: OrderProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderProduct
     */
    omit?: OrderProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderProductInclude<ExtArgs> | null
    /**
     * Filter, which OrderProduct to fetch.
     */
    where?: OrderProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderProducts to fetch.
     */
    orderBy?: OrderProductOrderByWithRelationInput | OrderProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderProducts.
     */
    cursor?: OrderProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderProducts.
     */
    distinct?: OrderProductScalarFieldEnum | OrderProductScalarFieldEnum[]
  }

  /**
   * OrderProduct findMany
   */
  export type OrderProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderProduct
     */
    select?: OrderProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderProduct
     */
    omit?: OrderProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderProductInclude<ExtArgs> | null
    /**
     * Filter, which OrderProducts to fetch.
     */
    where?: OrderProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderProducts to fetch.
     */
    orderBy?: OrderProductOrderByWithRelationInput | OrderProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderProducts.
     */
    cursor?: OrderProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderProducts.
     */
    skip?: number
    distinct?: OrderProductScalarFieldEnum | OrderProductScalarFieldEnum[]
  }

  /**
   * OrderProduct create
   */
  export type OrderProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderProduct
     */
    select?: OrderProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderProduct
     */
    omit?: OrderProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderProductInclude<ExtArgs> | null
    /**
     * The data needed to create a OrderProduct.
     */
    data: XOR<OrderProductCreateInput, OrderProductUncheckedCreateInput>
  }

  /**
   * OrderProduct createMany
   */
  export type OrderProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderProducts.
     */
    data: OrderProductCreateManyInput | OrderProductCreateManyInput[]
  }

  /**
   * OrderProduct createManyAndReturn
   */
  export type OrderProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderProduct
     */
    select?: OrderProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderProduct
     */
    omit?: OrderProductOmit<ExtArgs> | null
    /**
     * The data used to create many OrderProducts.
     */
    data: OrderProductCreateManyInput | OrderProductCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderProductIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderProduct update
   */
  export type OrderProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderProduct
     */
    select?: OrderProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderProduct
     */
    omit?: OrderProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderProductInclude<ExtArgs> | null
    /**
     * The data needed to update a OrderProduct.
     */
    data: XOR<OrderProductUpdateInput, OrderProductUncheckedUpdateInput>
    /**
     * Choose, which OrderProduct to update.
     */
    where: OrderProductWhereUniqueInput
  }

  /**
   * OrderProduct updateMany
   */
  export type OrderProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderProducts.
     */
    data: XOR<OrderProductUpdateManyMutationInput, OrderProductUncheckedUpdateManyInput>
    /**
     * Filter which OrderProducts to update
     */
    where?: OrderProductWhereInput
    /**
     * Limit how many OrderProducts to update.
     */
    limit?: number
  }

  /**
   * OrderProduct updateManyAndReturn
   */
  export type OrderProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderProduct
     */
    select?: OrderProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderProduct
     */
    omit?: OrderProductOmit<ExtArgs> | null
    /**
     * The data used to update OrderProducts.
     */
    data: XOR<OrderProductUpdateManyMutationInput, OrderProductUncheckedUpdateManyInput>
    /**
     * Filter which OrderProducts to update
     */
    where?: OrderProductWhereInput
    /**
     * Limit how many OrderProducts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderProductIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderProduct upsert
   */
  export type OrderProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderProduct
     */
    select?: OrderProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderProduct
     */
    omit?: OrderProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderProductInclude<ExtArgs> | null
    /**
     * The filter to search for the OrderProduct to update in case it exists.
     */
    where: OrderProductWhereUniqueInput
    /**
     * In case the OrderProduct found by the `where` argument doesn't exist, create a new OrderProduct with this data.
     */
    create: XOR<OrderProductCreateInput, OrderProductUncheckedCreateInput>
    /**
     * In case the OrderProduct was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderProductUpdateInput, OrderProductUncheckedUpdateInput>
  }

  /**
   * OrderProduct delete
   */
  export type OrderProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderProduct
     */
    select?: OrderProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderProduct
     */
    omit?: OrderProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderProductInclude<ExtArgs> | null
    /**
     * Filter which OrderProduct to delete.
     */
    where: OrderProductWhereUniqueInput
  }

  /**
   * OrderProduct deleteMany
   */
  export type OrderProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderProducts to delete
     */
    where?: OrderProductWhereInput
    /**
     * Limit how many OrderProducts to delete.
     */
    limit?: number
  }

  /**
   * OrderProduct without action
   */
  export type OrderProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderProduct
     */
    select?: OrderProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderProduct
     */
    omit?: OrderProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderProductInclude<ExtArgs> | null
  }


  /**
   * Model UserOrderComment
   */

  export type AggregateUserOrderComment = {
    _count: UserOrderCommentCountAggregateOutputType | null
    _avg: UserOrderCommentAvgAggregateOutputType | null
    _sum: UserOrderCommentSumAggregateOutputType | null
    _min: UserOrderCommentMinAggregateOutputType | null
    _max: UserOrderCommentMaxAggregateOutputType | null
  }

  export type UserOrderCommentAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type UserOrderCommentSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type UserOrderCommentMinAggregateOutputType = {
    id: number | null
    comment: string | null
    userId: number | null
  }

  export type UserOrderCommentMaxAggregateOutputType = {
    id: number | null
    comment: string | null
    userId: number | null
  }

  export type UserOrderCommentCountAggregateOutputType = {
    id: number
    comment: number
    userId: number
    _all: number
  }


  export type UserOrderCommentAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type UserOrderCommentSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type UserOrderCommentMinAggregateInputType = {
    id?: true
    comment?: true
    userId?: true
  }

  export type UserOrderCommentMaxAggregateInputType = {
    id?: true
    comment?: true
    userId?: true
  }

  export type UserOrderCommentCountAggregateInputType = {
    id?: true
    comment?: true
    userId?: true
    _all?: true
  }

  export type UserOrderCommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserOrderComment to aggregate.
     */
    where?: UserOrderCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserOrderComments to fetch.
     */
    orderBy?: UserOrderCommentOrderByWithRelationInput | UserOrderCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserOrderCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserOrderComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserOrderComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserOrderComments
    **/
    _count?: true | UserOrderCommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserOrderCommentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserOrderCommentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserOrderCommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserOrderCommentMaxAggregateInputType
  }

  export type GetUserOrderCommentAggregateType<T extends UserOrderCommentAggregateArgs> = {
        [P in keyof T & keyof AggregateUserOrderComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserOrderComment[P]>
      : GetScalarType<T[P], AggregateUserOrderComment[P]>
  }




  export type UserOrderCommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserOrderCommentWhereInput
    orderBy?: UserOrderCommentOrderByWithAggregationInput | UserOrderCommentOrderByWithAggregationInput[]
    by: UserOrderCommentScalarFieldEnum[] | UserOrderCommentScalarFieldEnum
    having?: UserOrderCommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserOrderCommentCountAggregateInputType | true
    _avg?: UserOrderCommentAvgAggregateInputType
    _sum?: UserOrderCommentSumAggregateInputType
    _min?: UserOrderCommentMinAggregateInputType
    _max?: UserOrderCommentMaxAggregateInputType
  }

  export type UserOrderCommentGroupByOutputType = {
    id: number
    comment: string
    userId: number
    _count: UserOrderCommentCountAggregateOutputType | null
    _avg: UserOrderCommentAvgAggregateOutputType | null
    _sum: UserOrderCommentSumAggregateOutputType | null
    _min: UserOrderCommentMinAggregateOutputType | null
    _max: UserOrderCommentMaxAggregateOutputType | null
  }

  type GetUserOrderCommentGroupByPayload<T extends UserOrderCommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserOrderCommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserOrderCommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserOrderCommentGroupByOutputType[P]>
            : GetScalarType<T[P], UserOrderCommentGroupByOutputType[P]>
        }
      >
    >


  export type UserOrderCommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    comment?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userOrderComment"]>

  export type UserOrderCommentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    comment?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userOrderComment"]>

  export type UserOrderCommentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    comment?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userOrderComment"]>

  export type UserOrderCommentSelectScalar = {
    id?: boolean
    comment?: boolean
    userId?: boolean
  }

  export type UserOrderCommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "comment" | "userId", ExtArgs["result"]["userOrderComment"]>
  export type UserOrderCommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserOrderCommentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserOrderCommentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserOrderCommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserOrderComment"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      comment: string
      userId: number
    }, ExtArgs["result"]["userOrderComment"]>
    composites: {}
  }

  type UserOrderCommentGetPayload<S extends boolean | null | undefined | UserOrderCommentDefaultArgs> = $Result.GetResult<Prisma.$UserOrderCommentPayload, S>

  type UserOrderCommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserOrderCommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserOrderCommentCountAggregateInputType | true
    }

  export interface UserOrderCommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserOrderComment'], meta: { name: 'UserOrderComment' } }
    /**
     * Find zero or one UserOrderComment that matches the filter.
     * @param {UserOrderCommentFindUniqueArgs} args - Arguments to find a UserOrderComment
     * @example
     * // Get one UserOrderComment
     * const userOrderComment = await prisma.userOrderComment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserOrderCommentFindUniqueArgs>(args: SelectSubset<T, UserOrderCommentFindUniqueArgs<ExtArgs>>): Prisma__UserOrderCommentClient<$Result.GetResult<Prisma.$UserOrderCommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserOrderComment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserOrderCommentFindUniqueOrThrowArgs} args - Arguments to find a UserOrderComment
     * @example
     * // Get one UserOrderComment
     * const userOrderComment = await prisma.userOrderComment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserOrderCommentFindUniqueOrThrowArgs>(args: SelectSubset<T, UserOrderCommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserOrderCommentClient<$Result.GetResult<Prisma.$UserOrderCommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserOrderComment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOrderCommentFindFirstArgs} args - Arguments to find a UserOrderComment
     * @example
     * // Get one UserOrderComment
     * const userOrderComment = await prisma.userOrderComment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserOrderCommentFindFirstArgs>(args?: SelectSubset<T, UserOrderCommentFindFirstArgs<ExtArgs>>): Prisma__UserOrderCommentClient<$Result.GetResult<Prisma.$UserOrderCommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserOrderComment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOrderCommentFindFirstOrThrowArgs} args - Arguments to find a UserOrderComment
     * @example
     * // Get one UserOrderComment
     * const userOrderComment = await prisma.userOrderComment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserOrderCommentFindFirstOrThrowArgs>(args?: SelectSubset<T, UserOrderCommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserOrderCommentClient<$Result.GetResult<Prisma.$UserOrderCommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserOrderComments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOrderCommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserOrderComments
     * const userOrderComments = await prisma.userOrderComment.findMany()
     * 
     * // Get first 10 UserOrderComments
     * const userOrderComments = await prisma.userOrderComment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userOrderCommentWithIdOnly = await prisma.userOrderComment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserOrderCommentFindManyArgs>(args?: SelectSubset<T, UserOrderCommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserOrderCommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserOrderComment.
     * @param {UserOrderCommentCreateArgs} args - Arguments to create a UserOrderComment.
     * @example
     * // Create one UserOrderComment
     * const UserOrderComment = await prisma.userOrderComment.create({
     *   data: {
     *     // ... data to create a UserOrderComment
     *   }
     * })
     * 
     */
    create<T extends UserOrderCommentCreateArgs>(args: SelectSubset<T, UserOrderCommentCreateArgs<ExtArgs>>): Prisma__UserOrderCommentClient<$Result.GetResult<Prisma.$UserOrderCommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserOrderComments.
     * @param {UserOrderCommentCreateManyArgs} args - Arguments to create many UserOrderComments.
     * @example
     * // Create many UserOrderComments
     * const userOrderComment = await prisma.userOrderComment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserOrderCommentCreateManyArgs>(args?: SelectSubset<T, UserOrderCommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserOrderComments and returns the data saved in the database.
     * @param {UserOrderCommentCreateManyAndReturnArgs} args - Arguments to create many UserOrderComments.
     * @example
     * // Create many UserOrderComments
     * const userOrderComment = await prisma.userOrderComment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserOrderComments and only return the `id`
     * const userOrderCommentWithIdOnly = await prisma.userOrderComment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserOrderCommentCreateManyAndReturnArgs>(args?: SelectSubset<T, UserOrderCommentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserOrderCommentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserOrderComment.
     * @param {UserOrderCommentDeleteArgs} args - Arguments to delete one UserOrderComment.
     * @example
     * // Delete one UserOrderComment
     * const UserOrderComment = await prisma.userOrderComment.delete({
     *   where: {
     *     // ... filter to delete one UserOrderComment
     *   }
     * })
     * 
     */
    delete<T extends UserOrderCommentDeleteArgs>(args: SelectSubset<T, UserOrderCommentDeleteArgs<ExtArgs>>): Prisma__UserOrderCommentClient<$Result.GetResult<Prisma.$UserOrderCommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserOrderComment.
     * @param {UserOrderCommentUpdateArgs} args - Arguments to update one UserOrderComment.
     * @example
     * // Update one UserOrderComment
     * const userOrderComment = await prisma.userOrderComment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserOrderCommentUpdateArgs>(args: SelectSubset<T, UserOrderCommentUpdateArgs<ExtArgs>>): Prisma__UserOrderCommentClient<$Result.GetResult<Prisma.$UserOrderCommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserOrderComments.
     * @param {UserOrderCommentDeleteManyArgs} args - Arguments to filter UserOrderComments to delete.
     * @example
     * // Delete a few UserOrderComments
     * const { count } = await prisma.userOrderComment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserOrderCommentDeleteManyArgs>(args?: SelectSubset<T, UserOrderCommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserOrderComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOrderCommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserOrderComments
     * const userOrderComment = await prisma.userOrderComment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserOrderCommentUpdateManyArgs>(args: SelectSubset<T, UserOrderCommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserOrderComments and returns the data updated in the database.
     * @param {UserOrderCommentUpdateManyAndReturnArgs} args - Arguments to update many UserOrderComments.
     * @example
     * // Update many UserOrderComments
     * const userOrderComment = await prisma.userOrderComment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserOrderComments and only return the `id`
     * const userOrderCommentWithIdOnly = await prisma.userOrderComment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserOrderCommentUpdateManyAndReturnArgs>(args: SelectSubset<T, UserOrderCommentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserOrderCommentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserOrderComment.
     * @param {UserOrderCommentUpsertArgs} args - Arguments to update or create a UserOrderComment.
     * @example
     * // Update or create a UserOrderComment
     * const userOrderComment = await prisma.userOrderComment.upsert({
     *   create: {
     *     // ... data to create a UserOrderComment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserOrderComment we want to update
     *   }
     * })
     */
    upsert<T extends UserOrderCommentUpsertArgs>(args: SelectSubset<T, UserOrderCommentUpsertArgs<ExtArgs>>): Prisma__UserOrderCommentClient<$Result.GetResult<Prisma.$UserOrderCommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserOrderComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOrderCommentCountArgs} args - Arguments to filter UserOrderComments to count.
     * @example
     * // Count the number of UserOrderComments
     * const count = await prisma.userOrderComment.count({
     *   where: {
     *     // ... the filter for the UserOrderComments we want to count
     *   }
     * })
    **/
    count<T extends UserOrderCommentCountArgs>(
      args?: Subset<T, UserOrderCommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserOrderCommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserOrderComment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOrderCommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserOrderCommentAggregateArgs>(args: Subset<T, UserOrderCommentAggregateArgs>): Prisma.PrismaPromise<GetUserOrderCommentAggregateType<T>>

    /**
     * Group by UserOrderComment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOrderCommentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserOrderCommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserOrderCommentGroupByArgs['orderBy'] }
        : { orderBy?: UserOrderCommentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
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
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserOrderCommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserOrderCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserOrderComment model
   */
  readonly fields: UserOrderCommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserOrderComment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserOrderCommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserOrderComment model
   */
  interface UserOrderCommentFieldRefs {
    readonly id: FieldRef<"UserOrderComment", 'Int'>
    readonly comment: FieldRef<"UserOrderComment", 'String'>
    readonly userId: FieldRef<"UserOrderComment", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * UserOrderComment findUnique
   */
  export type UserOrderCommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOrderComment
     */
    select?: UserOrderCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOrderComment
     */
    omit?: UserOrderCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOrderCommentInclude<ExtArgs> | null
    /**
     * Filter, which UserOrderComment to fetch.
     */
    where: UserOrderCommentWhereUniqueInput
  }

  /**
   * UserOrderComment findUniqueOrThrow
   */
  export type UserOrderCommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOrderComment
     */
    select?: UserOrderCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOrderComment
     */
    omit?: UserOrderCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOrderCommentInclude<ExtArgs> | null
    /**
     * Filter, which UserOrderComment to fetch.
     */
    where: UserOrderCommentWhereUniqueInput
  }

  /**
   * UserOrderComment findFirst
   */
  export type UserOrderCommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOrderComment
     */
    select?: UserOrderCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOrderComment
     */
    omit?: UserOrderCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOrderCommentInclude<ExtArgs> | null
    /**
     * Filter, which UserOrderComment to fetch.
     */
    where?: UserOrderCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserOrderComments to fetch.
     */
    orderBy?: UserOrderCommentOrderByWithRelationInput | UserOrderCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserOrderComments.
     */
    cursor?: UserOrderCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserOrderComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserOrderComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserOrderComments.
     */
    distinct?: UserOrderCommentScalarFieldEnum | UserOrderCommentScalarFieldEnum[]
  }

  /**
   * UserOrderComment findFirstOrThrow
   */
  export type UserOrderCommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOrderComment
     */
    select?: UserOrderCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOrderComment
     */
    omit?: UserOrderCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOrderCommentInclude<ExtArgs> | null
    /**
     * Filter, which UserOrderComment to fetch.
     */
    where?: UserOrderCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserOrderComments to fetch.
     */
    orderBy?: UserOrderCommentOrderByWithRelationInput | UserOrderCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserOrderComments.
     */
    cursor?: UserOrderCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserOrderComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserOrderComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserOrderComments.
     */
    distinct?: UserOrderCommentScalarFieldEnum | UserOrderCommentScalarFieldEnum[]
  }

  /**
   * UserOrderComment findMany
   */
  export type UserOrderCommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOrderComment
     */
    select?: UserOrderCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOrderComment
     */
    omit?: UserOrderCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOrderCommentInclude<ExtArgs> | null
    /**
     * Filter, which UserOrderComments to fetch.
     */
    where?: UserOrderCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserOrderComments to fetch.
     */
    orderBy?: UserOrderCommentOrderByWithRelationInput | UserOrderCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserOrderComments.
     */
    cursor?: UserOrderCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserOrderComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserOrderComments.
     */
    skip?: number
    distinct?: UserOrderCommentScalarFieldEnum | UserOrderCommentScalarFieldEnum[]
  }

  /**
   * UserOrderComment create
   */
  export type UserOrderCommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOrderComment
     */
    select?: UserOrderCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOrderComment
     */
    omit?: UserOrderCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOrderCommentInclude<ExtArgs> | null
    /**
     * The data needed to create a UserOrderComment.
     */
    data: XOR<UserOrderCommentCreateInput, UserOrderCommentUncheckedCreateInput>
  }

  /**
   * UserOrderComment createMany
   */
  export type UserOrderCommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserOrderComments.
     */
    data: UserOrderCommentCreateManyInput | UserOrderCommentCreateManyInput[]
  }

  /**
   * UserOrderComment createManyAndReturn
   */
  export type UserOrderCommentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOrderComment
     */
    select?: UserOrderCommentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserOrderComment
     */
    omit?: UserOrderCommentOmit<ExtArgs> | null
    /**
     * The data used to create many UserOrderComments.
     */
    data: UserOrderCommentCreateManyInput | UserOrderCommentCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOrderCommentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserOrderComment update
   */
  export type UserOrderCommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOrderComment
     */
    select?: UserOrderCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOrderComment
     */
    omit?: UserOrderCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOrderCommentInclude<ExtArgs> | null
    /**
     * The data needed to update a UserOrderComment.
     */
    data: XOR<UserOrderCommentUpdateInput, UserOrderCommentUncheckedUpdateInput>
    /**
     * Choose, which UserOrderComment to update.
     */
    where: UserOrderCommentWhereUniqueInput
  }

  /**
   * UserOrderComment updateMany
   */
  export type UserOrderCommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserOrderComments.
     */
    data: XOR<UserOrderCommentUpdateManyMutationInput, UserOrderCommentUncheckedUpdateManyInput>
    /**
     * Filter which UserOrderComments to update
     */
    where?: UserOrderCommentWhereInput
    /**
     * Limit how many UserOrderComments to update.
     */
    limit?: number
  }

  /**
   * UserOrderComment updateManyAndReturn
   */
  export type UserOrderCommentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOrderComment
     */
    select?: UserOrderCommentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserOrderComment
     */
    omit?: UserOrderCommentOmit<ExtArgs> | null
    /**
     * The data used to update UserOrderComments.
     */
    data: XOR<UserOrderCommentUpdateManyMutationInput, UserOrderCommentUncheckedUpdateManyInput>
    /**
     * Filter which UserOrderComments to update
     */
    where?: UserOrderCommentWhereInput
    /**
     * Limit how many UserOrderComments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOrderCommentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserOrderComment upsert
   */
  export type UserOrderCommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOrderComment
     */
    select?: UserOrderCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOrderComment
     */
    omit?: UserOrderCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOrderCommentInclude<ExtArgs> | null
    /**
     * The filter to search for the UserOrderComment to update in case it exists.
     */
    where: UserOrderCommentWhereUniqueInput
    /**
     * In case the UserOrderComment found by the `where` argument doesn't exist, create a new UserOrderComment with this data.
     */
    create: XOR<UserOrderCommentCreateInput, UserOrderCommentUncheckedCreateInput>
    /**
     * In case the UserOrderComment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserOrderCommentUpdateInput, UserOrderCommentUncheckedUpdateInput>
  }

  /**
   * UserOrderComment delete
   */
  export type UserOrderCommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOrderComment
     */
    select?: UserOrderCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOrderComment
     */
    omit?: UserOrderCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOrderCommentInclude<ExtArgs> | null
    /**
     * Filter which UserOrderComment to delete.
     */
    where: UserOrderCommentWhereUniqueInput
  }

  /**
   * UserOrderComment deleteMany
   */
  export type UserOrderCommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserOrderComments to delete
     */
    where?: UserOrderCommentWhereInput
    /**
     * Limit how many UserOrderComments to delete.
     */
    limit?: number
  }

  /**
   * UserOrderComment without action
   */
  export type UserOrderCommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOrderComment
     */
    select?: UserOrderCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOrderComment
     */
    omit?: UserOrderCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOrderCommentInclude<ExtArgs> | null
  }


  /**
   * Model ContactsMessage
   */

  export type AggregateContactsMessage = {
    _count: ContactsMessageCountAggregateOutputType | null
    _avg: ContactsMessageAvgAggregateOutputType | null
    _sum: ContactsMessageSumAggregateOutputType | null
    _min: ContactsMessageMinAggregateOutputType | null
    _max: ContactsMessageMaxAggregateOutputType | null
  }

  export type ContactsMessageAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ContactsMessageSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ContactsMessageMinAggregateOutputType = {
    id: number | null
    message: string | null
    userId: number | null
  }

  export type ContactsMessageMaxAggregateOutputType = {
    id: number | null
    message: string | null
    userId: number | null
  }

  export type ContactsMessageCountAggregateOutputType = {
    id: number
    message: number
    userId: number
    _all: number
  }


  export type ContactsMessageAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ContactsMessageSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ContactsMessageMinAggregateInputType = {
    id?: true
    message?: true
    userId?: true
  }

  export type ContactsMessageMaxAggregateInputType = {
    id?: true
    message?: true
    userId?: true
  }

  export type ContactsMessageCountAggregateInputType = {
    id?: true
    message?: true
    userId?: true
    _all?: true
  }

  export type ContactsMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactsMessage to aggregate.
     */
    where?: ContactsMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactsMessages to fetch.
     */
    orderBy?: ContactsMessageOrderByWithRelationInput | ContactsMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactsMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactsMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactsMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContactsMessages
    **/
    _count?: true | ContactsMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContactsMessageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContactsMessageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactsMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactsMessageMaxAggregateInputType
  }

  export type GetContactsMessageAggregateType<T extends ContactsMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateContactsMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContactsMessage[P]>
      : GetScalarType<T[P], AggregateContactsMessage[P]>
  }




  export type ContactsMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactsMessageWhereInput
    orderBy?: ContactsMessageOrderByWithAggregationInput | ContactsMessageOrderByWithAggregationInput[]
    by: ContactsMessageScalarFieldEnum[] | ContactsMessageScalarFieldEnum
    having?: ContactsMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactsMessageCountAggregateInputType | true
    _avg?: ContactsMessageAvgAggregateInputType
    _sum?: ContactsMessageSumAggregateInputType
    _min?: ContactsMessageMinAggregateInputType
    _max?: ContactsMessageMaxAggregateInputType
  }

  export type ContactsMessageGroupByOutputType = {
    id: number
    message: string
    userId: number
    _count: ContactsMessageCountAggregateOutputType | null
    _avg: ContactsMessageAvgAggregateOutputType | null
    _sum: ContactsMessageSumAggregateOutputType | null
    _min: ContactsMessageMinAggregateOutputType | null
    _max: ContactsMessageMaxAggregateOutputType | null
  }

  type GetContactsMessageGroupByPayload<T extends ContactsMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactsMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactsMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactsMessageGroupByOutputType[P]>
            : GetScalarType<T[P], ContactsMessageGroupByOutputType[P]>
        }
      >
    >


  export type ContactsMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contactsMessage"]>

  export type ContactsMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contactsMessage"]>

  export type ContactsMessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contactsMessage"]>

  export type ContactsMessageSelectScalar = {
    id?: boolean
    message?: boolean
    userId?: boolean
  }

  export type ContactsMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "message" | "userId", ExtArgs["result"]["contactsMessage"]>
  export type ContactsMessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ContactsMessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ContactsMessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ContactsMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContactsMessage"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      message: string
      userId: number
    }, ExtArgs["result"]["contactsMessage"]>
    composites: {}
  }

  type ContactsMessageGetPayload<S extends boolean | null | undefined | ContactsMessageDefaultArgs> = $Result.GetResult<Prisma.$ContactsMessagePayload, S>

  type ContactsMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContactsMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContactsMessageCountAggregateInputType | true
    }

  export interface ContactsMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContactsMessage'], meta: { name: 'ContactsMessage' } }
    /**
     * Find zero or one ContactsMessage that matches the filter.
     * @param {ContactsMessageFindUniqueArgs} args - Arguments to find a ContactsMessage
     * @example
     * // Get one ContactsMessage
     * const contactsMessage = await prisma.contactsMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactsMessageFindUniqueArgs>(args: SelectSubset<T, ContactsMessageFindUniqueArgs<ExtArgs>>): Prisma__ContactsMessageClient<$Result.GetResult<Prisma.$ContactsMessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ContactsMessage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContactsMessageFindUniqueOrThrowArgs} args - Arguments to find a ContactsMessage
     * @example
     * // Get one ContactsMessage
     * const contactsMessage = await prisma.contactsMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactsMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, ContactsMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContactsMessageClient<$Result.GetResult<Prisma.$ContactsMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactsMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactsMessageFindFirstArgs} args - Arguments to find a ContactsMessage
     * @example
     * // Get one ContactsMessage
     * const contactsMessage = await prisma.contactsMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactsMessageFindFirstArgs>(args?: SelectSubset<T, ContactsMessageFindFirstArgs<ExtArgs>>): Prisma__ContactsMessageClient<$Result.GetResult<Prisma.$ContactsMessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactsMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactsMessageFindFirstOrThrowArgs} args - Arguments to find a ContactsMessage
     * @example
     * // Get one ContactsMessage
     * const contactsMessage = await prisma.contactsMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactsMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, ContactsMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContactsMessageClient<$Result.GetResult<Prisma.$ContactsMessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ContactsMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactsMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContactsMessages
     * const contactsMessages = await prisma.contactsMessage.findMany()
     * 
     * // Get first 10 ContactsMessages
     * const contactsMessages = await prisma.contactsMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactsMessageWithIdOnly = await prisma.contactsMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContactsMessageFindManyArgs>(args?: SelectSubset<T, ContactsMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactsMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ContactsMessage.
     * @param {ContactsMessageCreateArgs} args - Arguments to create a ContactsMessage.
     * @example
     * // Create one ContactsMessage
     * const ContactsMessage = await prisma.contactsMessage.create({
     *   data: {
     *     // ... data to create a ContactsMessage
     *   }
     * })
     * 
     */
    create<T extends ContactsMessageCreateArgs>(args: SelectSubset<T, ContactsMessageCreateArgs<ExtArgs>>): Prisma__ContactsMessageClient<$Result.GetResult<Prisma.$ContactsMessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ContactsMessages.
     * @param {ContactsMessageCreateManyArgs} args - Arguments to create many ContactsMessages.
     * @example
     * // Create many ContactsMessages
     * const contactsMessage = await prisma.contactsMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContactsMessageCreateManyArgs>(args?: SelectSubset<T, ContactsMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ContactsMessages and returns the data saved in the database.
     * @param {ContactsMessageCreateManyAndReturnArgs} args - Arguments to create many ContactsMessages.
     * @example
     * // Create many ContactsMessages
     * const contactsMessage = await prisma.contactsMessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ContactsMessages and only return the `id`
     * const contactsMessageWithIdOnly = await prisma.contactsMessage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContactsMessageCreateManyAndReturnArgs>(args?: SelectSubset<T, ContactsMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactsMessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ContactsMessage.
     * @param {ContactsMessageDeleteArgs} args - Arguments to delete one ContactsMessage.
     * @example
     * // Delete one ContactsMessage
     * const ContactsMessage = await prisma.contactsMessage.delete({
     *   where: {
     *     // ... filter to delete one ContactsMessage
     *   }
     * })
     * 
     */
    delete<T extends ContactsMessageDeleteArgs>(args: SelectSubset<T, ContactsMessageDeleteArgs<ExtArgs>>): Prisma__ContactsMessageClient<$Result.GetResult<Prisma.$ContactsMessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ContactsMessage.
     * @param {ContactsMessageUpdateArgs} args - Arguments to update one ContactsMessage.
     * @example
     * // Update one ContactsMessage
     * const contactsMessage = await prisma.contactsMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContactsMessageUpdateArgs>(args: SelectSubset<T, ContactsMessageUpdateArgs<ExtArgs>>): Prisma__ContactsMessageClient<$Result.GetResult<Prisma.$ContactsMessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ContactsMessages.
     * @param {ContactsMessageDeleteManyArgs} args - Arguments to filter ContactsMessages to delete.
     * @example
     * // Delete a few ContactsMessages
     * const { count } = await prisma.contactsMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContactsMessageDeleteManyArgs>(args?: SelectSubset<T, ContactsMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactsMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactsMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContactsMessages
     * const contactsMessage = await prisma.contactsMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContactsMessageUpdateManyArgs>(args: SelectSubset<T, ContactsMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactsMessages and returns the data updated in the database.
     * @param {ContactsMessageUpdateManyAndReturnArgs} args - Arguments to update many ContactsMessages.
     * @example
     * // Update many ContactsMessages
     * const contactsMessage = await prisma.contactsMessage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ContactsMessages and only return the `id`
     * const contactsMessageWithIdOnly = await prisma.contactsMessage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ContactsMessageUpdateManyAndReturnArgs>(args: SelectSubset<T, ContactsMessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactsMessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ContactsMessage.
     * @param {ContactsMessageUpsertArgs} args - Arguments to update or create a ContactsMessage.
     * @example
     * // Update or create a ContactsMessage
     * const contactsMessage = await prisma.contactsMessage.upsert({
     *   create: {
     *     // ... data to create a ContactsMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContactsMessage we want to update
     *   }
     * })
     */
    upsert<T extends ContactsMessageUpsertArgs>(args: SelectSubset<T, ContactsMessageUpsertArgs<ExtArgs>>): Prisma__ContactsMessageClient<$Result.GetResult<Prisma.$ContactsMessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ContactsMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactsMessageCountArgs} args - Arguments to filter ContactsMessages to count.
     * @example
     * // Count the number of ContactsMessages
     * const count = await prisma.contactsMessage.count({
     *   where: {
     *     // ... the filter for the ContactsMessages we want to count
     *   }
     * })
    **/
    count<T extends ContactsMessageCountArgs>(
      args?: Subset<T, ContactsMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactsMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContactsMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactsMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContactsMessageAggregateArgs>(args: Subset<T, ContactsMessageAggregateArgs>): Prisma.PrismaPromise<GetContactsMessageAggregateType<T>>

    /**
     * Group by ContactsMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactsMessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContactsMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactsMessageGroupByArgs['orderBy'] }
        : { orderBy?: ContactsMessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
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
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContactsMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactsMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContactsMessage model
   */
  readonly fields: ContactsMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContactsMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactsMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ContactsMessage model
   */
  interface ContactsMessageFieldRefs {
    readonly id: FieldRef<"ContactsMessage", 'Int'>
    readonly message: FieldRef<"ContactsMessage", 'String'>
    readonly userId: FieldRef<"ContactsMessage", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ContactsMessage findUnique
   */
  export type ContactsMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactsMessage
     */
    select?: ContactsMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactsMessage
     */
    omit?: ContactsMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactsMessageInclude<ExtArgs> | null
    /**
     * Filter, which ContactsMessage to fetch.
     */
    where: ContactsMessageWhereUniqueInput
  }

  /**
   * ContactsMessage findUniqueOrThrow
   */
  export type ContactsMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactsMessage
     */
    select?: ContactsMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactsMessage
     */
    omit?: ContactsMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactsMessageInclude<ExtArgs> | null
    /**
     * Filter, which ContactsMessage to fetch.
     */
    where: ContactsMessageWhereUniqueInput
  }

  /**
   * ContactsMessage findFirst
   */
  export type ContactsMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactsMessage
     */
    select?: ContactsMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactsMessage
     */
    omit?: ContactsMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactsMessageInclude<ExtArgs> | null
    /**
     * Filter, which ContactsMessage to fetch.
     */
    where?: ContactsMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactsMessages to fetch.
     */
    orderBy?: ContactsMessageOrderByWithRelationInput | ContactsMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactsMessages.
     */
    cursor?: ContactsMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactsMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactsMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactsMessages.
     */
    distinct?: ContactsMessageScalarFieldEnum | ContactsMessageScalarFieldEnum[]
  }

  /**
   * ContactsMessage findFirstOrThrow
   */
  export type ContactsMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactsMessage
     */
    select?: ContactsMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactsMessage
     */
    omit?: ContactsMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactsMessageInclude<ExtArgs> | null
    /**
     * Filter, which ContactsMessage to fetch.
     */
    where?: ContactsMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactsMessages to fetch.
     */
    orderBy?: ContactsMessageOrderByWithRelationInput | ContactsMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactsMessages.
     */
    cursor?: ContactsMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactsMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactsMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactsMessages.
     */
    distinct?: ContactsMessageScalarFieldEnum | ContactsMessageScalarFieldEnum[]
  }

  /**
   * ContactsMessage findMany
   */
  export type ContactsMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactsMessage
     */
    select?: ContactsMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactsMessage
     */
    omit?: ContactsMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactsMessageInclude<ExtArgs> | null
    /**
     * Filter, which ContactsMessages to fetch.
     */
    where?: ContactsMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactsMessages to fetch.
     */
    orderBy?: ContactsMessageOrderByWithRelationInput | ContactsMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContactsMessages.
     */
    cursor?: ContactsMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactsMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactsMessages.
     */
    skip?: number
    distinct?: ContactsMessageScalarFieldEnum | ContactsMessageScalarFieldEnum[]
  }

  /**
   * ContactsMessage create
   */
  export type ContactsMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactsMessage
     */
    select?: ContactsMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactsMessage
     */
    omit?: ContactsMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactsMessageInclude<ExtArgs> | null
    /**
     * The data needed to create a ContactsMessage.
     */
    data: XOR<ContactsMessageCreateInput, ContactsMessageUncheckedCreateInput>
  }

  /**
   * ContactsMessage createMany
   */
  export type ContactsMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContactsMessages.
     */
    data: ContactsMessageCreateManyInput | ContactsMessageCreateManyInput[]
  }

  /**
   * ContactsMessage createManyAndReturn
   */
  export type ContactsMessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactsMessage
     */
    select?: ContactsMessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContactsMessage
     */
    omit?: ContactsMessageOmit<ExtArgs> | null
    /**
     * The data used to create many ContactsMessages.
     */
    data: ContactsMessageCreateManyInput | ContactsMessageCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactsMessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ContactsMessage update
   */
  export type ContactsMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactsMessage
     */
    select?: ContactsMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactsMessage
     */
    omit?: ContactsMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactsMessageInclude<ExtArgs> | null
    /**
     * The data needed to update a ContactsMessage.
     */
    data: XOR<ContactsMessageUpdateInput, ContactsMessageUncheckedUpdateInput>
    /**
     * Choose, which ContactsMessage to update.
     */
    where: ContactsMessageWhereUniqueInput
  }

  /**
   * ContactsMessage updateMany
   */
  export type ContactsMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContactsMessages.
     */
    data: XOR<ContactsMessageUpdateManyMutationInput, ContactsMessageUncheckedUpdateManyInput>
    /**
     * Filter which ContactsMessages to update
     */
    where?: ContactsMessageWhereInput
    /**
     * Limit how many ContactsMessages to update.
     */
    limit?: number
  }

  /**
   * ContactsMessage updateManyAndReturn
   */
  export type ContactsMessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactsMessage
     */
    select?: ContactsMessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContactsMessage
     */
    omit?: ContactsMessageOmit<ExtArgs> | null
    /**
     * The data used to update ContactsMessages.
     */
    data: XOR<ContactsMessageUpdateManyMutationInput, ContactsMessageUncheckedUpdateManyInput>
    /**
     * Filter which ContactsMessages to update
     */
    where?: ContactsMessageWhereInput
    /**
     * Limit how many ContactsMessages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactsMessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ContactsMessage upsert
   */
  export type ContactsMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactsMessage
     */
    select?: ContactsMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactsMessage
     */
    omit?: ContactsMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactsMessageInclude<ExtArgs> | null
    /**
     * The filter to search for the ContactsMessage to update in case it exists.
     */
    where: ContactsMessageWhereUniqueInput
    /**
     * In case the ContactsMessage found by the `where` argument doesn't exist, create a new ContactsMessage with this data.
     */
    create: XOR<ContactsMessageCreateInput, ContactsMessageUncheckedCreateInput>
    /**
     * In case the ContactsMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactsMessageUpdateInput, ContactsMessageUncheckedUpdateInput>
  }

  /**
   * ContactsMessage delete
   */
  export type ContactsMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactsMessage
     */
    select?: ContactsMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactsMessage
     */
    omit?: ContactsMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactsMessageInclude<ExtArgs> | null
    /**
     * Filter which ContactsMessage to delete.
     */
    where: ContactsMessageWhereUniqueInput
  }

  /**
   * ContactsMessage deleteMany
   */
  export type ContactsMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactsMessages to delete
     */
    where?: ContactsMessageWhereInput
    /**
     * Limit how many ContactsMessages to delete.
     */
    limit?: number
  }

  /**
   * ContactsMessage without action
   */
  export type ContactsMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactsMessage
     */
    select?: ContactsMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactsMessage
     */
    omit?: ContactsMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactsMessageInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    id: number | null
    price: number | null
    discount: number | null
  }

  export type ProductSumAggregateOutputType = {
    id: number | null
    price: number | null
    discount: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    color: string | null
    price: number | null
    discount: number | null
    img: string | null
    creationDate: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    color: string | null
    price: number | null
    discount: number | null
    img: string | null
    creationDate: Date | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    title: number
    description: number
    color: number
    price: number
    discount: number
    img: number
    creationDate: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    id?: true
    price?: true
    discount?: true
  }

  export type ProductSumAggregateInputType = {
    id?: true
    price?: true
    discount?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    color?: true
    price?: true
    discount?: true
    img?: true
    creationDate?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    color?: true
    price?: true
    discount?: true
    img?: true
    creationDate?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    color?: true
    price?: true
    discount?: true
    img?: true
    creationDate?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: number
    title: string
    description: string
    color: string
    price: number
    discount: number | null
    img: string
    creationDate: Date
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    color?: boolean
    price?: boolean
    discount?: boolean
    img?: boolean
    creationDate?: boolean
    productDescription?: boolean | Product$productDescriptionArgs<ExtArgs>
    orderProduct?: boolean | Product$orderProductArgs<ExtArgs>
    category?: boolean | Product$categoryArgs<ExtArgs>
    cartsProduct?: boolean | Product$cartsProductArgs<ExtArgs>
    ProductCharacteristic?: boolean | Product$ProductCharacteristicArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    color?: boolean
    price?: boolean
    discount?: boolean
    img?: boolean
    creationDate?: boolean
  }, ExtArgs["result"]["product"]>

  export type ProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    color?: boolean
    price?: boolean
    discount?: boolean
    img?: boolean
    creationDate?: boolean
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    color?: boolean
    price?: boolean
    discount?: boolean
    img?: boolean
    creationDate?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "color" | "price" | "discount" | "img" | "creationDate", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productDescription?: boolean | Product$productDescriptionArgs<ExtArgs>
    orderProduct?: boolean | Product$orderProductArgs<ExtArgs>
    category?: boolean | Product$categoryArgs<ExtArgs>
    cartsProduct?: boolean | Product$cartsProductArgs<ExtArgs>
    ProductCharacteristic?: boolean | Product$ProductCharacteristicArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      productDescription: Prisma.$ProductDescriptionPayload<ExtArgs>[]
      orderProduct: Prisma.$OrderProductPayload<ExtArgs>[]
      category: Prisma.$CategoryPayload<ExtArgs>[]
      cartsProduct: Prisma.$CartsProductPayload<ExtArgs>[]
      ProductCharacteristic: Prisma.$ProductCharacteristicPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string
      color: string
      price: number
      discount: number | null
      img: string
      creationDate: Date
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productWithIdOnly = await prisma.product.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
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
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    productDescription<T extends Product$productDescriptionArgs<ExtArgs> = {}>(args?: Subset<T, Product$productDescriptionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductDescriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orderProduct<T extends Product$orderProductArgs<ExtArgs> = {}>(args?: Subset<T, Product$orderProductArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    category<T extends Product$categoryArgs<ExtArgs> = {}>(args?: Subset<T, Product$categoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cartsProduct<T extends Product$cartsProductArgs<ExtArgs> = {}>(args?: Subset<T, Product$cartsProductArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartsProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ProductCharacteristic<T extends Product$ProductCharacteristicArgs<ExtArgs> = {}>(args?: Subset<T, Product$ProductCharacteristicArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductCharacteristicPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'Int'>
    readonly title: FieldRef<"Product", 'String'>
    readonly description: FieldRef<"Product", 'String'>
    readonly color: FieldRef<"Product", 'String'>
    readonly price: FieldRef<"Product", 'Int'>
    readonly discount: FieldRef<"Product", 'Int'>
    readonly img: FieldRef<"Product", 'String'>
    readonly creationDate: FieldRef<"Product", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product updateManyAndReturn
   */
  export type ProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product.productDescription
   */
  export type Product$productDescriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductDescription
     */
    select?: ProductDescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductDescription
     */
    omit?: ProductDescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductDescriptionInclude<ExtArgs> | null
    where?: ProductDescriptionWhereInput
    orderBy?: ProductDescriptionOrderByWithRelationInput | ProductDescriptionOrderByWithRelationInput[]
    cursor?: ProductDescriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductDescriptionScalarFieldEnum | ProductDescriptionScalarFieldEnum[]
  }

  /**
   * Product.orderProduct
   */
  export type Product$orderProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderProduct
     */
    select?: OrderProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderProduct
     */
    omit?: OrderProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderProductInclude<ExtArgs> | null
    where?: OrderProductWhereInput
    orderBy?: OrderProductOrderByWithRelationInput | OrderProductOrderByWithRelationInput[]
    cursor?: OrderProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderProductScalarFieldEnum | OrderProductScalarFieldEnum[]
  }

  /**
   * Product.category
   */
  export type Product$categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    cursor?: CategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Product.cartsProduct
   */
  export type Product$cartsProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartsProduct
     */
    select?: CartsProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartsProduct
     */
    omit?: CartsProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartsProductInclude<ExtArgs> | null
    where?: CartsProductWhereInput
    orderBy?: CartsProductOrderByWithRelationInput | CartsProductOrderByWithRelationInput[]
    cursor?: CartsProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CartsProductScalarFieldEnum | CartsProductScalarFieldEnum[]
  }

  /**
   * Product.ProductCharacteristic
   */
  export type Product$ProductCharacteristicArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCharacteristic
     */
    select?: ProductCharacteristicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCharacteristic
     */
    omit?: ProductCharacteristicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCharacteristicInclude<ExtArgs> | null
    where?: ProductCharacteristicWhereInput
    orderBy?: ProductCharacteristicOrderByWithRelationInput | ProductCharacteristicOrderByWithRelationInput[]
    cursor?: ProductCharacteristicWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductCharacteristicScalarFieldEnum | ProductCharacteristicScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: number
    name: string
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    product?: boolean | Category$productArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | Category$productArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
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
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends Category$productArgs<ExtArgs> = {}>(args?: Subset<T, Category$productArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'Int'>
    readonly name: FieldRef<"Category", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.product
   */
  export type Category$productArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model CartsProduct
   */

  export type AggregateCartsProduct = {
    _count: CartsProductCountAggregateOutputType | null
    _avg: CartsProductAvgAggregateOutputType | null
    _sum: CartsProductSumAggregateOutputType | null
    _min: CartsProductMinAggregateOutputType | null
    _max: CartsProductMaxAggregateOutputType | null
  }

  export type CartsProductAvgAggregateOutputType = {
    id: number | null
    amout: number | null
    userId: number | null
  }

  export type CartsProductSumAggregateOutputType = {
    id: number | null
    amout: number | null
    userId: number | null
  }

  export type CartsProductMinAggregateOutputType = {
    id: number | null
    amout: number | null
    userId: number | null
  }

  export type CartsProductMaxAggregateOutputType = {
    id: number | null
    amout: number | null
    userId: number | null
  }

  export type CartsProductCountAggregateOutputType = {
    id: number
    amout: number
    userId: number
    _all: number
  }


  export type CartsProductAvgAggregateInputType = {
    id?: true
    amout?: true
    userId?: true
  }

  export type CartsProductSumAggregateInputType = {
    id?: true
    amout?: true
    userId?: true
  }

  export type CartsProductMinAggregateInputType = {
    id?: true
    amout?: true
    userId?: true
  }

  export type CartsProductMaxAggregateInputType = {
    id?: true
    amout?: true
    userId?: true
  }

  export type CartsProductCountAggregateInputType = {
    id?: true
    amout?: true
    userId?: true
    _all?: true
  }

  export type CartsProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CartsProduct to aggregate.
     */
    where?: CartsProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CartsProducts to fetch.
     */
    orderBy?: CartsProductOrderByWithRelationInput | CartsProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CartsProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CartsProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CartsProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CartsProducts
    **/
    _count?: true | CartsProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CartsProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CartsProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CartsProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CartsProductMaxAggregateInputType
  }

  export type GetCartsProductAggregateType<T extends CartsProductAggregateArgs> = {
        [P in keyof T & keyof AggregateCartsProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCartsProduct[P]>
      : GetScalarType<T[P], AggregateCartsProduct[P]>
  }




  export type CartsProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartsProductWhereInput
    orderBy?: CartsProductOrderByWithAggregationInput | CartsProductOrderByWithAggregationInput[]
    by: CartsProductScalarFieldEnum[] | CartsProductScalarFieldEnum
    having?: CartsProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CartsProductCountAggregateInputType | true
    _avg?: CartsProductAvgAggregateInputType
    _sum?: CartsProductSumAggregateInputType
    _min?: CartsProductMinAggregateInputType
    _max?: CartsProductMaxAggregateInputType
  }

  export type CartsProductGroupByOutputType = {
    id: number
    amout: number
    userId: number
    _count: CartsProductCountAggregateOutputType | null
    _avg: CartsProductAvgAggregateOutputType | null
    _sum: CartsProductSumAggregateOutputType | null
    _min: CartsProductMinAggregateOutputType | null
    _max: CartsProductMaxAggregateOutputType | null
  }

  type GetCartsProductGroupByPayload<T extends CartsProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CartsProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CartsProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CartsProductGroupByOutputType[P]>
            : GetScalarType<T[P], CartsProductGroupByOutputType[P]>
        }
      >
    >


  export type CartsProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amout?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | CartsProduct$productArgs<ExtArgs>
    _count?: boolean | CartsProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cartsProduct"]>

  export type CartsProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amout?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cartsProduct"]>

  export type CartsProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amout?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cartsProduct"]>

  export type CartsProductSelectScalar = {
    id?: boolean
    amout?: boolean
    userId?: boolean
  }

  export type CartsProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "amout" | "userId", ExtArgs["result"]["cartsProduct"]>
  export type CartsProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | CartsProduct$productArgs<ExtArgs>
    _count?: boolean | CartsProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CartsProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CartsProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CartsProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CartsProduct"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      amout: number
      userId: number
    }, ExtArgs["result"]["cartsProduct"]>
    composites: {}
  }

  type CartsProductGetPayload<S extends boolean | null | undefined | CartsProductDefaultArgs> = $Result.GetResult<Prisma.$CartsProductPayload, S>

  type CartsProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CartsProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CartsProductCountAggregateInputType | true
    }

  export interface CartsProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CartsProduct'], meta: { name: 'CartsProduct' } }
    /**
     * Find zero or one CartsProduct that matches the filter.
     * @param {CartsProductFindUniqueArgs} args - Arguments to find a CartsProduct
     * @example
     * // Get one CartsProduct
     * const cartsProduct = await prisma.cartsProduct.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CartsProductFindUniqueArgs>(args: SelectSubset<T, CartsProductFindUniqueArgs<ExtArgs>>): Prisma__CartsProductClient<$Result.GetResult<Prisma.$CartsProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CartsProduct that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CartsProductFindUniqueOrThrowArgs} args - Arguments to find a CartsProduct
     * @example
     * // Get one CartsProduct
     * const cartsProduct = await prisma.cartsProduct.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CartsProductFindUniqueOrThrowArgs>(args: SelectSubset<T, CartsProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CartsProductClient<$Result.GetResult<Prisma.$CartsProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CartsProduct that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartsProductFindFirstArgs} args - Arguments to find a CartsProduct
     * @example
     * // Get one CartsProduct
     * const cartsProduct = await prisma.cartsProduct.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CartsProductFindFirstArgs>(args?: SelectSubset<T, CartsProductFindFirstArgs<ExtArgs>>): Prisma__CartsProductClient<$Result.GetResult<Prisma.$CartsProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CartsProduct that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartsProductFindFirstOrThrowArgs} args - Arguments to find a CartsProduct
     * @example
     * // Get one CartsProduct
     * const cartsProduct = await prisma.cartsProduct.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CartsProductFindFirstOrThrowArgs>(args?: SelectSubset<T, CartsProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__CartsProductClient<$Result.GetResult<Prisma.$CartsProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CartsProducts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartsProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CartsProducts
     * const cartsProducts = await prisma.cartsProduct.findMany()
     * 
     * // Get first 10 CartsProducts
     * const cartsProducts = await prisma.cartsProduct.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cartsProductWithIdOnly = await prisma.cartsProduct.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CartsProductFindManyArgs>(args?: SelectSubset<T, CartsProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartsProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CartsProduct.
     * @param {CartsProductCreateArgs} args - Arguments to create a CartsProduct.
     * @example
     * // Create one CartsProduct
     * const CartsProduct = await prisma.cartsProduct.create({
     *   data: {
     *     // ... data to create a CartsProduct
     *   }
     * })
     * 
     */
    create<T extends CartsProductCreateArgs>(args: SelectSubset<T, CartsProductCreateArgs<ExtArgs>>): Prisma__CartsProductClient<$Result.GetResult<Prisma.$CartsProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CartsProducts.
     * @param {CartsProductCreateManyArgs} args - Arguments to create many CartsProducts.
     * @example
     * // Create many CartsProducts
     * const cartsProduct = await prisma.cartsProduct.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CartsProductCreateManyArgs>(args?: SelectSubset<T, CartsProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CartsProducts and returns the data saved in the database.
     * @param {CartsProductCreateManyAndReturnArgs} args - Arguments to create many CartsProducts.
     * @example
     * // Create many CartsProducts
     * const cartsProduct = await prisma.cartsProduct.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CartsProducts and only return the `id`
     * const cartsProductWithIdOnly = await prisma.cartsProduct.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CartsProductCreateManyAndReturnArgs>(args?: SelectSubset<T, CartsProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartsProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CartsProduct.
     * @param {CartsProductDeleteArgs} args - Arguments to delete one CartsProduct.
     * @example
     * // Delete one CartsProduct
     * const CartsProduct = await prisma.cartsProduct.delete({
     *   where: {
     *     // ... filter to delete one CartsProduct
     *   }
     * })
     * 
     */
    delete<T extends CartsProductDeleteArgs>(args: SelectSubset<T, CartsProductDeleteArgs<ExtArgs>>): Prisma__CartsProductClient<$Result.GetResult<Prisma.$CartsProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CartsProduct.
     * @param {CartsProductUpdateArgs} args - Arguments to update one CartsProduct.
     * @example
     * // Update one CartsProduct
     * const cartsProduct = await prisma.cartsProduct.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CartsProductUpdateArgs>(args: SelectSubset<T, CartsProductUpdateArgs<ExtArgs>>): Prisma__CartsProductClient<$Result.GetResult<Prisma.$CartsProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CartsProducts.
     * @param {CartsProductDeleteManyArgs} args - Arguments to filter CartsProducts to delete.
     * @example
     * // Delete a few CartsProducts
     * const { count } = await prisma.cartsProduct.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CartsProductDeleteManyArgs>(args?: SelectSubset<T, CartsProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CartsProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartsProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CartsProducts
     * const cartsProduct = await prisma.cartsProduct.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CartsProductUpdateManyArgs>(args: SelectSubset<T, CartsProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CartsProducts and returns the data updated in the database.
     * @param {CartsProductUpdateManyAndReturnArgs} args - Arguments to update many CartsProducts.
     * @example
     * // Update many CartsProducts
     * const cartsProduct = await prisma.cartsProduct.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CartsProducts and only return the `id`
     * const cartsProductWithIdOnly = await prisma.cartsProduct.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CartsProductUpdateManyAndReturnArgs>(args: SelectSubset<T, CartsProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartsProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CartsProduct.
     * @param {CartsProductUpsertArgs} args - Arguments to update or create a CartsProduct.
     * @example
     * // Update or create a CartsProduct
     * const cartsProduct = await prisma.cartsProduct.upsert({
     *   create: {
     *     // ... data to create a CartsProduct
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CartsProduct we want to update
     *   }
     * })
     */
    upsert<T extends CartsProductUpsertArgs>(args: SelectSubset<T, CartsProductUpsertArgs<ExtArgs>>): Prisma__CartsProductClient<$Result.GetResult<Prisma.$CartsProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CartsProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartsProductCountArgs} args - Arguments to filter CartsProducts to count.
     * @example
     * // Count the number of CartsProducts
     * const count = await prisma.cartsProduct.count({
     *   where: {
     *     // ... the filter for the CartsProducts we want to count
     *   }
     * })
    **/
    count<T extends CartsProductCountArgs>(
      args?: Subset<T, CartsProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CartsProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CartsProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartsProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CartsProductAggregateArgs>(args: Subset<T, CartsProductAggregateArgs>): Prisma.PrismaPromise<GetCartsProductAggregateType<T>>

    /**
     * Group by CartsProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartsProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CartsProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CartsProductGroupByArgs['orderBy'] }
        : { orderBy?: CartsProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
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
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CartsProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCartsProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CartsProduct model
   */
  readonly fields: CartsProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CartsProduct.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CartsProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends CartsProduct$productArgs<ExtArgs> = {}>(args?: Subset<T, CartsProduct$productArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CartsProduct model
   */
  interface CartsProductFieldRefs {
    readonly id: FieldRef<"CartsProduct", 'Int'>
    readonly amout: FieldRef<"CartsProduct", 'Int'>
    readonly userId: FieldRef<"CartsProduct", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * CartsProduct findUnique
   */
  export type CartsProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartsProduct
     */
    select?: CartsProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartsProduct
     */
    omit?: CartsProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartsProductInclude<ExtArgs> | null
    /**
     * Filter, which CartsProduct to fetch.
     */
    where: CartsProductWhereUniqueInput
  }

  /**
   * CartsProduct findUniqueOrThrow
   */
  export type CartsProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartsProduct
     */
    select?: CartsProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartsProduct
     */
    omit?: CartsProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartsProductInclude<ExtArgs> | null
    /**
     * Filter, which CartsProduct to fetch.
     */
    where: CartsProductWhereUniqueInput
  }

  /**
   * CartsProduct findFirst
   */
  export type CartsProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartsProduct
     */
    select?: CartsProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartsProduct
     */
    omit?: CartsProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartsProductInclude<ExtArgs> | null
    /**
     * Filter, which CartsProduct to fetch.
     */
    where?: CartsProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CartsProducts to fetch.
     */
    orderBy?: CartsProductOrderByWithRelationInput | CartsProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CartsProducts.
     */
    cursor?: CartsProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CartsProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CartsProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CartsProducts.
     */
    distinct?: CartsProductScalarFieldEnum | CartsProductScalarFieldEnum[]
  }

  /**
   * CartsProduct findFirstOrThrow
   */
  export type CartsProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartsProduct
     */
    select?: CartsProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartsProduct
     */
    omit?: CartsProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartsProductInclude<ExtArgs> | null
    /**
     * Filter, which CartsProduct to fetch.
     */
    where?: CartsProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CartsProducts to fetch.
     */
    orderBy?: CartsProductOrderByWithRelationInput | CartsProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CartsProducts.
     */
    cursor?: CartsProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CartsProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CartsProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CartsProducts.
     */
    distinct?: CartsProductScalarFieldEnum | CartsProductScalarFieldEnum[]
  }

  /**
   * CartsProduct findMany
   */
  export type CartsProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartsProduct
     */
    select?: CartsProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartsProduct
     */
    omit?: CartsProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartsProductInclude<ExtArgs> | null
    /**
     * Filter, which CartsProducts to fetch.
     */
    where?: CartsProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CartsProducts to fetch.
     */
    orderBy?: CartsProductOrderByWithRelationInput | CartsProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CartsProducts.
     */
    cursor?: CartsProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CartsProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CartsProducts.
     */
    skip?: number
    distinct?: CartsProductScalarFieldEnum | CartsProductScalarFieldEnum[]
  }

  /**
   * CartsProduct create
   */
  export type CartsProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartsProduct
     */
    select?: CartsProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartsProduct
     */
    omit?: CartsProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartsProductInclude<ExtArgs> | null
    /**
     * The data needed to create a CartsProduct.
     */
    data: XOR<CartsProductCreateInput, CartsProductUncheckedCreateInput>
  }

  /**
   * CartsProduct createMany
   */
  export type CartsProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CartsProducts.
     */
    data: CartsProductCreateManyInput | CartsProductCreateManyInput[]
  }

  /**
   * CartsProduct createManyAndReturn
   */
  export type CartsProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartsProduct
     */
    select?: CartsProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CartsProduct
     */
    omit?: CartsProductOmit<ExtArgs> | null
    /**
     * The data used to create many CartsProducts.
     */
    data: CartsProductCreateManyInput | CartsProductCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartsProductIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CartsProduct update
   */
  export type CartsProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartsProduct
     */
    select?: CartsProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartsProduct
     */
    omit?: CartsProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartsProductInclude<ExtArgs> | null
    /**
     * The data needed to update a CartsProduct.
     */
    data: XOR<CartsProductUpdateInput, CartsProductUncheckedUpdateInput>
    /**
     * Choose, which CartsProduct to update.
     */
    where: CartsProductWhereUniqueInput
  }

  /**
   * CartsProduct updateMany
   */
  export type CartsProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CartsProducts.
     */
    data: XOR<CartsProductUpdateManyMutationInput, CartsProductUncheckedUpdateManyInput>
    /**
     * Filter which CartsProducts to update
     */
    where?: CartsProductWhereInput
    /**
     * Limit how many CartsProducts to update.
     */
    limit?: number
  }

  /**
   * CartsProduct updateManyAndReturn
   */
  export type CartsProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartsProduct
     */
    select?: CartsProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CartsProduct
     */
    omit?: CartsProductOmit<ExtArgs> | null
    /**
     * The data used to update CartsProducts.
     */
    data: XOR<CartsProductUpdateManyMutationInput, CartsProductUncheckedUpdateManyInput>
    /**
     * Filter which CartsProducts to update
     */
    where?: CartsProductWhereInput
    /**
     * Limit how many CartsProducts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartsProductIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CartsProduct upsert
   */
  export type CartsProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartsProduct
     */
    select?: CartsProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartsProduct
     */
    omit?: CartsProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartsProductInclude<ExtArgs> | null
    /**
     * The filter to search for the CartsProduct to update in case it exists.
     */
    where: CartsProductWhereUniqueInput
    /**
     * In case the CartsProduct found by the `where` argument doesn't exist, create a new CartsProduct with this data.
     */
    create: XOR<CartsProductCreateInput, CartsProductUncheckedCreateInput>
    /**
     * In case the CartsProduct was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CartsProductUpdateInput, CartsProductUncheckedUpdateInput>
  }

  /**
   * CartsProduct delete
   */
  export type CartsProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartsProduct
     */
    select?: CartsProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartsProduct
     */
    omit?: CartsProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartsProductInclude<ExtArgs> | null
    /**
     * Filter which CartsProduct to delete.
     */
    where: CartsProductWhereUniqueInput
  }

  /**
   * CartsProduct deleteMany
   */
  export type CartsProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CartsProducts to delete
     */
    where?: CartsProductWhereInput
    /**
     * Limit how many CartsProducts to delete.
     */
    limit?: number
  }

  /**
   * CartsProduct.product
   */
  export type CartsProduct$productArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * CartsProduct without action
   */
  export type CartsProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartsProduct
     */
    select?: CartsProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartsProduct
     */
    omit?: CartsProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartsProductInclude<ExtArgs> | null
  }


  /**
   * Model ProductDescription
   */

  export type AggregateProductDescription = {
    _count: ProductDescriptionCountAggregateOutputType | null
    _avg: ProductDescriptionAvgAggregateOutputType | null
    _sum: ProductDescriptionSumAggregateOutputType | null
    _min: ProductDescriptionMinAggregateOutputType | null
    _max: ProductDescriptionMaxAggregateOutputType | null
  }

  export type ProductDescriptionAvgAggregateOutputType = {
    id: number | null
    productId: number | null
  }

  export type ProductDescriptionSumAggregateOutputType = {
    id: number | null
    productId: number | null
  }

  export type ProductDescriptionMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    img: string | null
    productId: number | null
  }

  export type ProductDescriptionMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    img: string | null
    productId: number | null
  }

  export type ProductDescriptionCountAggregateOutputType = {
    id: number
    title: number
    description: number
    img: number
    productId: number
    _all: number
  }


  export type ProductDescriptionAvgAggregateInputType = {
    id?: true
    productId?: true
  }

  export type ProductDescriptionSumAggregateInputType = {
    id?: true
    productId?: true
  }

  export type ProductDescriptionMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    img?: true
    productId?: true
  }

  export type ProductDescriptionMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    img?: true
    productId?: true
  }

  export type ProductDescriptionCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    img?: true
    productId?: true
    _all?: true
  }

  export type ProductDescriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductDescription to aggregate.
     */
    where?: ProductDescriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductDescriptions to fetch.
     */
    orderBy?: ProductDescriptionOrderByWithRelationInput | ProductDescriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductDescriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductDescriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductDescriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductDescriptions
    **/
    _count?: true | ProductDescriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductDescriptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductDescriptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductDescriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductDescriptionMaxAggregateInputType
  }

  export type GetProductDescriptionAggregateType<T extends ProductDescriptionAggregateArgs> = {
        [P in keyof T & keyof AggregateProductDescription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductDescription[P]>
      : GetScalarType<T[P], AggregateProductDescription[P]>
  }




  export type ProductDescriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductDescriptionWhereInput
    orderBy?: ProductDescriptionOrderByWithAggregationInput | ProductDescriptionOrderByWithAggregationInput[]
    by: ProductDescriptionScalarFieldEnum[] | ProductDescriptionScalarFieldEnum
    having?: ProductDescriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductDescriptionCountAggregateInputType | true
    _avg?: ProductDescriptionAvgAggregateInputType
    _sum?: ProductDescriptionSumAggregateInputType
    _min?: ProductDescriptionMinAggregateInputType
    _max?: ProductDescriptionMaxAggregateInputType
  }

  export type ProductDescriptionGroupByOutputType = {
    id: number
    title: string
    description: string
    img: string
    productId: number
    _count: ProductDescriptionCountAggregateOutputType | null
    _avg: ProductDescriptionAvgAggregateOutputType | null
    _sum: ProductDescriptionSumAggregateOutputType | null
    _min: ProductDescriptionMinAggregateOutputType | null
    _max: ProductDescriptionMaxAggregateOutputType | null
  }

  type GetProductDescriptionGroupByPayload<T extends ProductDescriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductDescriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductDescriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductDescriptionGroupByOutputType[P]>
            : GetScalarType<T[P], ProductDescriptionGroupByOutputType[P]>
        }
      >
    >


  export type ProductDescriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    img?: boolean
    productId?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productDescription"]>

  export type ProductDescriptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    img?: boolean
    productId?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productDescription"]>

  export type ProductDescriptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    img?: boolean
    productId?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productDescription"]>

  export type ProductDescriptionSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    img?: boolean
    productId?: boolean
  }

  export type ProductDescriptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "img" | "productId", ExtArgs["result"]["productDescription"]>
  export type ProductDescriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type ProductDescriptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type ProductDescriptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $ProductDescriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductDescription"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string
      img: string
      productId: number
    }, ExtArgs["result"]["productDescription"]>
    composites: {}
  }

  type ProductDescriptionGetPayload<S extends boolean | null | undefined | ProductDescriptionDefaultArgs> = $Result.GetResult<Prisma.$ProductDescriptionPayload, S>

  type ProductDescriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductDescriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductDescriptionCountAggregateInputType | true
    }

  export interface ProductDescriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductDescription'], meta: { name: 'ProductDescription' } }
    /**
     * Find zero or one ProductDescription that matches the filter.
     * @param {ProductDescriptionFindUniqueArgs} args - Arguments to find a ProductDescription
     * @example
     * // Get one ProductDescription
     * const productDescription = await prisma.productDescription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductDescriptionFindUniqueArgs>(args: SelectSubset<T, ProductDescriptionFindUniqueArgs<ExtArgs>>): Prisma__ProductDescriptionClient<$Result.GetResult<Prisma.$ProductDescriptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductDescription that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductDescriptionFindUniqueOrThrowArgs} args - Arguments to find a ProductDescription
     * @example
     * // Get one ProductDescription
     * const productDescription = await prisma.productDescription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductDescriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductDescriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductDescriptionClient<$Result.GetResult<Prisma.$ProductDescriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductDescription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductDescriptionFindFirstArgs} args - Arguments to find a ProductDescription
     * @example
     * // Get one ProductDescription
     * const productDescription = await prisma.productDescription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductDescriptionFindFirstArgs>(args?: SelectSubset<T, ProductDescriptionFindFirstArgs<ExtArgs>>): Prisma__ProductDescriptionClient<$Result.GetResult<Prisma.$ProductDescriptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductDescription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductDescriptionFindFirstOrThrowArgs} args - Arguments to find a ProductDescription
     * @example
     * // Get one ProductDescription
     * const productDescription = await prisma.productDescription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductDescriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductDescriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductDescriptionClient<$Result.GetResult<Prisma.$ProductDescriptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductDescriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductDescriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductDescriptions
     * const productDescriptions = await prisma.productDescription.findMany()
     * 
     * // Get first 10 ProductDescriptions
     * const productDescriptions = await prisma.productDescription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productDescriptionWithIdOnly = await prisma.productDescription.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductDescriptionFindManyArgs>(args?: SelectSubset<T, ProductDescriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductDescriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductDescription.
     * @param {ProductDescriptionCreateArgs} args - Arguments to create a ProductDescription.
     * @example
     * // Create one ProductDescription
     * const ProductDescription = await prisma.productDescription.create({
     *   data: {
     *     // ... data to create a ProductDescription
     *   }
     * })
     * 
     */
    create<T extends ProductDescriptionCreateArgs>(args: SelectSubset<T, ProductDescriptionCreateArgs<ExtArgs>>): Prisma__ProductDescriptionClient<$Result.GetResult<Prisma.$ProductDescriptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductDescriptions.
     * @param {ProductDescriptionCreateManyArgs} args - Arguments to create many ProductDescriptions.
     * @example
     * // Create many ProductDescriptions
     * const productDescription = await prisma.productDescription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductDescriptionCreateManyArgs>(args?: SelectSubset<T, ProductDescriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductDescriptions and returns the data saved in the database.
     * @param {ProductDescriptionCreateManyAndReturnArgs} args - Arguments to create many ProductDescriptions.
     * @example
     * // Create many ProductDescriptions
     * const productDescription = await prisma.productDescription.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductDescriptions and only return the `id`
     * const productDescriptionWithIdOnly = await prisma.productDescription.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductDescriptionCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductDescriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductDescriptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProductDescription.
     * @param {ProductDescriptionDeleteArgs} args - Arguments to delete one ProductDescription.
     * @example
     * // Delete one ProductDescription
     * const ProductDescription = await prisma.productDescription.delete({
     *   where: {
     *     // ... filter to delete one ProductDescription
     *   }
     * })
     * 
     */
    delete<T extends ProductDescriptionDeleteArgs>(args: SelectSubset<T, ProductDescriptionDeleteArgs<ExtArgs>>): Prisma__ProductDescriptionClient<$Result.GetResult<Prisma.$ProductDescriptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductDescription.
     * @param {ProductDescriptionUpdateArgs} args - Arguments to update one ProductDescription.
     * @example
     * // Update one ProductDescription
     * const productDescription = await prisma.productDescription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductDescriptionUpdateArgs>(args: SelectSubset<T, ProductDescriptionUpdateArgs<ExtArgs>>): Prisma__ProductDescriptionClient<$Result.GetResult<Prisma.$ProductDescriptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductDescriptions.
     * @param {ProductDescriptionDeleteManyArgs} args - Arguments to filter ProductDescriptions to delete.
     * @example
     * // Delete a few ProductDescriptions
     * const { count } = await prisma.productDescription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDescriptionDeleteManyArgs>(args?: SelectSubset<T, ProductDescriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductDescriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductDescriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductDescriptions
     * const productDescription = await prisma.productDescription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductDescriptionUpdateManyArgs>(args: SelectSubset<T, ProductDescriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductDescriptions and returns the data updated in the database.
     * @param {ProductDescriptionUpdateManyAndReturnArgs} args - Arguments to update many ProductDescriptions.
     * @example
     * // Update many ProductDescriptions
     * const productDescription = await prisma.productDescription.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProductDescriptions and only return the `id`
     * const productDescriptionWithIdOnly = await prisma.productDescription.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductDescriptionUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductDescriptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductDescriptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProductDescription.
     * @param {ProductDescriptionUpsertArgs} args - Arguments to update or create a ProductDescription.
     * @example
     * // Update or create a ProductDescription
     * const productDescription = await prisma.productDescription.upsert({
     *   create: {
     *     // ... data to create a ProductDescription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductDescription we want to update
     *   }
     * })
     */
    upsert<T extends ProductDescriptionUpsertArgs>(args: SelectSubset<T, ProductDescriptionUpsertArgs<ExtArgs>>): Prisma__ProductDescriptionClient<$Result.GetResult<Prisma.$ProductDescriptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductDescriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductDescriptionCountArgs} args - Arguments to filter ProductDescriptions to count.
     * @example
     * // Count the number of ProductDescriptions
     * const count = await prisma.productDescription.count({
     *   where: {
     *     // ... the filter for the ProductDescriptions we want to count
     *   }
     * })
    **/
    count<T extends ProductDescriptionCountArgs>(
      args?: Subset<T, ProductDescriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductDescriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductDescription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductDescriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductDescriptionAggregateArgs>(args: Subset<T, ProductDescriptionAggregateArgs>): Prisma.PrismaPromise<GetProductDescriptionAggregateType<T>>

    /**
     * Group by ProductDescription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductDescriptionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductDescriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductDescriptionGroupByArgs['orderBy'] }
        : { orderBy?: ProductDescriptionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
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
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductDescriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductDescriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductDescription model
   */
  readonly fields: ProductDescriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductDescription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductDescriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProductDescription model
   */
  interface ProductDescriptionFieldRefs {
    readonly id: FieldRef<"ProductDescription", 'Int'>
    readonly title: FieldRef<"ProductDescription", 'String'>
    readonly description: FieldRef<"ProductDescription", 'String'>
    readonly img: FieldRef<"ProductDescription", 'String'>
    readonly productId: FieldRef<"ProductDescription", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ProductDescription findUnique
   */
  export type ProductDescriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductDescription
     */
    select?: ProductDescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductDescription
     */
    omit?: ProductDescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductDescriptionInclude<ExtArgs> | null
    /**
     * Filter, which ProductDescription to fetch.
     */
    where: ProductDescriptionWhereUniqueInput
  }

  /**
   * ProductDescription findUniqueOrThrow
   */
  export type ProductDescriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductDescription
     */
    select?: ProductDescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductDescription
     */
    omit?: ProductDescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductDescriptionInclude<ExtArgs> | null
    /**
     * Filter, which ProductDescription to fetch.
     */
    where: ProductDescriptionWhereUniqueInput
  }

  /**
   * ProductDescription findFirst
   */
  export type ProductDescriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductDescription
     */
    select?: ProductDescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductDescription
     */
    omit?: ProductDescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductDescriptionInclude<ExtArgs> | null
    /**
     * Filter, which ProductDescription to fetch.
     */
    where?: ProductDescriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductDescriptions to fetch.
     */
    orderBy?: ProductDescriptionOrderByWithRelationInput | ProductDescriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductDescriptions.
     */
    cursor?: ProductDescriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductDescriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductDescriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductDescriptions.
     */
    distinct?: ProductDescriptionScalarFieldEnum | ProductDescriptionScalarFieldEnum[]
  }

  /**
   * ProductDescription findFirstOrThrow
   */
  export type ProductDescriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductDescription
     */
    select?: ProductDescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductDescription
     */
    omit?: ProductDescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductDescriptionInclude<ExtArgs> | null
    /**
     * Filter, which ProductDescription to fetch.
     */
    where?: ProductDescriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductDescriptions to fetch.
     */
    orderBy?: ProductDescriptionOrderByWithRelationInput | ProductDescriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductDescriptions.
     */
    cursor?: ProductDescriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductDescriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductDescriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductDescriptions.
     */
    distinct?: ProductDescriptionScalarFieldEnum | ProductDescriptionScalarFieldEnum[]
  }

  /**
   * ProductDescription findMany
   */
  export type ProductDescriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductDescription
     */
    select?: ProductDescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductDescription
     */
    omit?: ProductDescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductDescriptionInclude<ExtArgs> | null
    /**
     * Filter, which ProductDescriptions to fetch.
     */
    where?: ProductDescriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductDescriptions to fetch.
     */
    orderBy?: ProductDescriptionOrderByWithRelationInput | ProductDescriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductDescriptions.
     */
    cursor?: ProductDescriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductDescriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductDescriptions.
     */
    skip?: number
    distinct?: ProductDescriptionScalarFieldEnum | ProductDescriptionScalarFieldEnum[]
  }

  /**
   * ProductDescription create
   */
  export type ProductDescriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductDescription
     */
    select?: ProductDescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductDescription
     */
    omit?: ProductDescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductDescriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductDescription.
     */
    data: XOR<ProductDescriptionCreateInput, ProductDescriptionUncheckedCreateInput>
  }

  /**
   * ProductDescription createMany
   */
  export type ProductDescriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductDescriptions.
     */
    data: ProductDescriptionCreateManyInput | ProductDescriptionCreateManyInput[]
  }

  /**
   * ProductDescription createManyAndReturn
   */
  export type ProductDescriptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductDescription
     */
    select?: ProductDescriptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductDescription
     */
    omit?: ProductDescriptionOmit<ExtArgs> | null
    /**
     * The data used to create many ProductDescriptions.
     */
    data: ProductDescriptionCreateManyInput | ProductDescriptionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductDescriptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductDescription update
   */
  export type ProductDescriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductDescription
     */
    select?: ProductDescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductDescription
     */
    omit?: ProductDescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductDescriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductDescription.
     */
    data: XOR<ProductDescriptionUpdateInput, ProductDescriptionUncheckedUpdateInput>
    /**
     * Choose, which ProductDescription to update.
     */
    where: ProductDescriptionWhereUniqueInput
  }

  /**
   * ProductDescription updateMany
   */
  export type ProductDescriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductDescriptions.
     */
    data: XOR<ProductDescriptionUpdateManyMutationInput, ProductDescriptionUncheckedUpdateManyInput>
    /**
     * Filter which ProductDescriptions to update
     */
    where?: ProductDescriptionWhereInput
    /**
     * Limit how many ProductDescriptions to update.
     */
    limit?: number
  }

  /**
   * ProductDescription updateManyAndReturn
   */
  export type ProductDescriptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductDescription
     */
    select?: ProductDescriptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductDescription
     */
    omit?: ProductDescriptionOmit<ExtArgs> | null
    /**
     * The data used to update ProductDescriptions.
     */
    data: XOR<ProductDescriptionUpdateManyMutationInput, ProductDescriptionUncheckedUpdateManyInput>
    /**
     * Filter which ProductDescriptions to update
     */
    where?: ProductDescriptionWhereInput
    /**
     * Limit how many ProductDescriptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductDescriptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductDescription upsert
   */
  export type ProductDescriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductDescription
     */
    select?: ProductDescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductDescription
     */
    omit?: ProductDescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductDescriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductDescription to update in case it exists.
     */
    where: ProductDescriptionWhereUniqueInput
    /**
     * In case the ProductDescription found by the `where` argument doesn't exist, create a new ProductDescription with this data.
     */
    create: XOR<ProductDescriptionCreateInput, ProductDescriptionUncheckedCreateInput>
    /**
     * In case the ProductDescription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductDescriptionUpdateInput, ProductDescriptionUncheckedUpdateInput>
  }

  /**
   * ProductDescription delete
   */
  export type ProductDescriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductDescription
     */
    select?: ProductDescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductDescription
     */
    omit?: ProductDescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductDescriptionInclude<ExtArgs> | null
    /**
     * Filter which ProductDescription to delete.
     */
    where: ProductDescriptionWhereUniqueInput
  }

  /**
   * ProductDescription deleteMany
   */
  export type ProductDescriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductDescriptions to delete
     */
    where?: ProductDescriptionWhereInput
    /**
     * Limit how many ProductDescriptions to delete.
     */
    limit?: number
  }

  /**
   * ProductDescription without action
   */
  export type ProductDescriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductDescription
     */
    select?: ProductDescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductDescription
     */
    omit?: ProductDescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductDescriptionInclude<ExtArgs> | null
  }


  /**
   * Model ProductCharacteristic
   */

  export type AggregateProductCharacteristic = {
    _count: ProductCharacteristicCountAggregateOutputType | null
    _avg: ProductCharacteristicAvgAggregateOutputType | null
    _sum: ProductCharacteristicSumAggregateOutputType | null
    _min: ProductCharacteristicMinAggregateOutputType | null
    _max: ProductCharacteristicMaxAggregateOutputType | null
  }

  export type ProductCharacteristicAvgAggregateOutputType = {
    id: number | null
    ufsStorage: number | null
    eMMSStorage: number | null
    productId: number | null
  }

  export type ProductCharacteristicSumAggregateOutputType = {
    id: number | null
    ufsStorage: number | null
    eMMSStorage: number | null
    productId: number | null
  }

  export type ProductCharacteristicMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    img: string | null
    coding: string | null
    ufsStorage: number | null
    eMMSStorage: number | null
    productId: number | null
  }

  export type ProductCharacteristicMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    img: string | null
    coding: string | null
    ufsStorage: number | null
    eMMSStorage: number | null
    productId: number | null
  }

  export type ProductCharacteristicCountAggregateOutputType = {
    id: number
    title: number
    description: number
    img: number
    coding: number
    ufsStorage: number
    eMMSStorage: number
    productId: number
    _all: number
  }


  export type ProductCharacteristicAvgAggregateInputType = {
    id?: true
    ufsStorage?: true
    eMMSStorage?: true
    productId?: true
  }

  export type ProductCharacteristicSumAggregateInputType = {
    id?: true
    ufsStorage?: true
    eMMSStorage?: true
    productId?: true
  }

  export type ProductCharacteristicMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    img?: true
    coding?: true
    ufsStorage?: true
    eMMSStorage?: true
    productId?: true
  }

  export type ProductCharacteristicMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    img?: true
    coding?: true
    ufsStorage?: true
    eMMSStorage?: true
    productId?: true
  }

  export type ProductCharacteristicCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    img?: true
    coding?: true
    ufsStorage?: true
    eMMSStorage?: true
    productId?: true
    _all?: true
  }

  export type ProductCharacteristicAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductCharacteristic to aggregate.
     */
    where?: ProductCharacteristicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductCharacteristics to fetch.
     */
    orderBy?: ProductCharacteristicOrderByWithRelationInput | ProductCharacteristicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductCharacteristicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductCharacteristics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductCharacteristics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductCharacteristics
    **/
    _count?: true | ProductCharacteristicCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductCharacteristicAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductCharacteristicSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductCharacteristicMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductCharacteristicMaxAggregateInputType
  }

  export type GetProductCharacteristicAggregateType<T extends ProductCharacteristicAggregateArgs> = {
        [P in keyof T & keyof AggregateProductCharacteristic]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductCharacteristic[P]>
      : GetScalarType<T[P], AggregateProductCharacteristic[P]>
  }




  export type ProductCharacteristicGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductCharacteristicWhereInput
    orderBy?: ProductCharacteristicOrderByWithAggregationInput | ProductCharacteristicOrderByWithAggregationInput[]
    by: ProductCharacteristicScalarFieldEnum[] | ProductCharacteristicScalarFieldEnum
    having?: ProductCharacteristicScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCharacteristicCountAggregateInputType | true
    _avg?: ProductCharacteristicAvgAggregateInputType
    _sum?: ProductCharacteristicSumAggregateInputType
    _min?: ProductCharacteristicMinAggregateInputType
    _max?: ProductCharacteristicMaxAggregateInputType
  }

  export type ProductCharacteristicGroupByOutputType = {
    id: number
    title: string
    description: string
    img: string
    coding: string
    ufsStorage: number
    eMMSStorage: number
    productId: number
    _count: ProductCharacteristicCountAggregateOutputType | null
    _avg: ProductCharacteristicAvgAggregateOutputType | null
    _sum: ProductCharacteristicSumAggregateOutputType | null
    _min: ProductCharacteristicMinAggregateOutputType | null
    _max: ProductCharacteristicMaxAggregateOutputType | null
  }

  type GetProductCharacteristicGroupByPayload<T extends ProductCharacteristicGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductCharacteristicGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductCharacteristicGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductCharacteristicGroupByOutputType[P]>
            : GetScalarType<T[P], ProductCharacteristicGroupByOutputType[P]>
        }
      >
    >


  export type ProductCharacteristicSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    img?: boolean
    coding?: boolean
    ufsStorage?: boolean
    eMMSStorage?: boolean
    productId?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productCharacteristic"]>

  export type ProductCharacteristicSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    img?: boolean
    coding?: boolean
    ufsStorage?: boolean
    eMMSStorage?: boolean
    productId?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productCharacteristic"]>

  export type ProductCharacteristicSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    img?: boolean
    coding?: boolean
    ufsStorage?: boolean
    eMMSStorage?: boolean
    productId?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productCharacteristic"]>

  export type ProductCharacteristicSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    img?: boolean
    coding?: boolean
    ufsStorage?: boolean
    eMMSStorage?: boolean
    productId?: boolean
  }

  export type ProductCharacteristicOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "img" | "coding" | "ufsStorage" | "eMMSStorage" | "productId", ExtArgs["result"]["productCharacteristic"]>
  export type ProductCharacteristicInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type ProductCharacteristicIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type ProductCharacteristicIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $ProductCharacteristicPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductCharacteristic"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string
      img: string
      coding: string
      ufsStorage: number
      eMMSStorage: number
      productId: number
    }, ExtArgs["result"]["productCharacteristic"]>
    composites: {}
  }

  type ProductCharacteristicGetPayload<S extends boolean | null | undefined | ProductCharacteristicDefaultArgs> = $Result.GetResult<Prisma.$ProductCharacteristicPayload, S>

  type ProductCharacteristicCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductCharacteristicFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCharacteristicCountAggregateInputType | true
    }

  export interface ProductCharacteristicDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductCharacteristic'], meta: { name: 'ProductCharacteristic' } }
    /**
     * Find zero or one ProductCharacteristic that matches the filter.
     * @param {ProductCharacteristicFindUniqueArgs} args - Arguments to find a ProductCharacteristic
     * @example
     * // Get one ProductCharacteristic
     * const productCharacteristic = await prisma.productCharacteristic.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductCharacteristicFindUniqueArgs>(args: SelectSubset<T, ProductCharacteristicFindUniqueArgs<ExtArgs>>): Prisma__ProductCharacteristicClient<$Result.GetResult<Prisma.$ProductCharacteristicPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductCharacteristic that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductCharacteristicFindUniqueOrThrowArgs} args - Arguments to find a ProductCharacteristic
     * @example
     * // Get one ProductCharacteristic
     * const productCharacteristic = await prisma.productCharacteristic.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductCharacteristicFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductCharacteristicFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductCharacteristicClient<$Result.GetResult<Prisma.$ProductCharacteristicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductCharacteristic that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCharacteristicFindFirstArgs} args - Arguments to find a ProductCharacteristic
     * @example
     * // Get one ProductCharacteristic
     * const productCharacteristic = await prisma.productCharacteristic.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductCharacteristicFindFirstArgs>(args?: SelectSubset<T, ProductCharacteristicFindFirstArgs<ExtArgs>>): Prisma__ProductCharacteristicClient<$Result.GetResult<Prisma.$ProductCharacteristicPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductCharacteristic that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCharacteristicFindFirstOrThrowArgs} args - Arguments to find a ProductCharacteristic
     * @example
     * // Get one ProductCharacteristic
     * const productCharacteristic = await prisma.productCharacteristic.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductCharacteristicFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductCharacteristicFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductCharacteristicClient<$Result.GetResult<Prisma.$ProductCharacteristicPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductCharacteristics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCharacteristicFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductCharacteristics
     * const productCharacteristics = await prisma.productCharacteristic.findMany()
     * 
     * // Get first 10 ProductCharacteristics
     * const productCharacteristics = await prisma.productCharacteristic.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productCharacteristicWithIdOnly = await prisma.productCharacteristic.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductCharacteristicFindManyArgs>(args?: SelectSubset<T, ProductCharacteristicFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductCharacteristicPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductCharacteristic.
     * @param {ProductCharacteristicCreateArgs} args - Arguments to create a ProductCharacteristic.
     * @example
     * // Create one ProductCharacteristic
     * const ProductCharacteristic = await prisma.productCharacteristic.create({
     *   data: {
     *     // ... data to create a ProductCharacteristic
     *   }
     * })
     * 
     */
    create<T extends ProductCharacteristicCreateArgs>(args: SelectSubset<T, ProductCharacteristicCreateArgs<ExtArgs>>): Prisma__ProductCharacteristicClient<$Result.GetResult<Prisma.$ProductCharacteristicPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductCharacteristics.
     * @param {ProductCharacteristicCreateManyArgs} args - Arguments to create many ProductCharacteristics.
     * @example
     * // Create many ProductCharacteristics
     * const productCharacteristic = await prisma.productCharacteristic.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCharacteristicCreateManyArgs>(args?: SelectSubset<T, ProductCharacteristicCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductCharacteristics and returns the data saved in the database.
     * @param {ProductCharacteristicCreateManyAndReturnArgs} args - Arguments to create many ProductCharacteristics.
     * @example
     * // Create many ProductCharacteristics
     * const productCharacteristic = await prisma.productCharacteristic.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductCharacteristics and only return the `id`
     * const productCharacteristicWithIdOnly = await prisma.productCharacteristic.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCharacteristicCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCharacteristicCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductCharacteristicPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProductCharacteristic.
     * @param {ProductCharacteristicDeleteArgs} args - Arguments to delete one ProductCharacteristic.
     * @example
     * // Delete one ProductCharacteristic
     * const ProductCharacteristic = await prisma.productCharacteristic.delete({
     *   where: {
     *     // ... filter to delete one ProductCharacteristic
     *   }
     * })
     * 
     */
    delete<T extends ProductCharacteristicDeleteArgs>(args: SelectSubset<T, ProductCharacteristicDeleteArgs<ExtArgs>>): Prisma__ProductCharacteristicClient<$Result.GetResult<Prisma.$ProductCharacteristicPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductCharacteristic.
     * @param {ProductCharacteristicUpdateArgs} args - Arguments to update one ProductCharacteristic.
     * @example
     * // Update one ProductCharacteristic
     * const productCharacteristic = await prisma.productCharacteristic.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductCharacteristicUpdateArgs>(args: SelectSubset<T, ProductCharacteristicUpdateArgs<ExtArgs>>): Prisma__ProductCharacteristicClient<$Result.GetResult<Prisma.$ProductCharacteristicPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductCharacteristics.
     * @param {ProductCharacteristicDeleteManyArgs} args - Arguments to filter ProductCharacteristics to delete.
     * @example
     * // Delete a few ProductCharacteristics
     * const { count } = await prisma.productCharacteristic.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductCharacteristicDeleteManyArgs>(args?: SelectSubset<T, ProductCharacteristicDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductCharacteristics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCharacteristicUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductCharacteristics
     * const productCharacteristic = await prisma.productCharacteristic.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductCharacteristicUpdateManyArgs>(args: SelectSubset<T, ProductCharacteristicUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductCharacteristics and returns the data updated in the database.
     * @param {ProductCharacteristicUpdateManyAndReturnArgs} args - Arguments to update many ProductCharacteristics.
     * @example
     * // Update many ProductCharacteristics
     * const productCharacteristic = await prisma.productCharacteristic.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProductCharacteristics and only return the `id`
     * const productCharacteristicWithIdOnly = await prisma.productCharacteristic.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductCharacteristicUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductCharacteristicUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductCharacteristicPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProductCharacteristic.
     * @param {ProductCharacteristicUpsertArgs} args - Arguments to update or create a ProductCharacteristic.
     * @example
     * // Update or create a ProductCharacteristic
     * const productCharacteristic = await prisma.productCharacteristic.upsert({
     *   create: {
     *     // ... data to create a ProductCharacteristic
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductCharacteristic we want to update
     *   }
     * })
     */
    upsert<T extends ProductCharacteristicUpsertArgs>(args: SelectSubset<T, ProductCharacteristicUpsertArgs<ExtArgs>>): Prisma__ProductCharacteristicClient<$Result.GetResult<Prisma.$ProductCharacteristicPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductCharacteristics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCharacteristicCountArgs} args - Arguments to filter ProductCharacteristics to count.
     * @example
     * // Count the number of ProductCharacteristics
     * const count = await prisma.productCharacteristic.count({
     *   where: {
     *     // ... the filter for the ProductCharacteristics we want to count
     *   }
     * })
    **/
    count<T extends ProductCharacteristicCountArgs>(
      args?: Subset<T, ProductCharacteristicCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCharacteristicCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductCharacteristic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCharacteristicAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductCharacteristicAggregateArgs>(args: Subset<T, ProductCharacteristicAggregateArgs>): Prisma.PrismaPromise<GetProductCharacteristicAggregateType<T>>

    /**
     * Group by ProductCharacteristic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCharacteristicGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductCharacteristicGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductCharacteristicGroupByArgs['orderBy'] }
        : { orderBy?: ProductCharacteristicGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
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
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductCharacteristicGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductCharacteristicGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductCharacteristic model
   */
  readonly fields: ProductCharacteristicFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductCharacteristic.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductCharacteristicClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProductCharacteristic model
   */
  interface ProductCharacteristicFieldRefs {
    readonly id: FieldRef<"ProductCharacteristic", 'Int'>
    readonly title: FieldRef<"ProductCharacteristic", 'String'>
    readonly description: FieldRef<"ProductCharacteristic", 'String'>
    readonly img: FieldRef<"ProductCharacteristic", 'String'>
    readonly coding: FieldRef<"ProductCharacteristic", 'String'>
    readonly ufsStorage: FieldRef<"ProductCharacteristic", 'Int'>
    readonly eMMSStorage: FieldRef<"ProductCharacteristic", 'Int'>
    readonly productId: FieldRef<"ProductCharacteristic", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ProductCharacteristic findUnique
   */
  export type ProductCharacteristicFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCharacteristic
     */
    select?: ProductCharacteristicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCharacteristic
     */
    omit?: ProductCharacteristicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCharacteristicInclude<ExtArgs> | null
    /**
     * Filter, which ProductCharacteristic to fetch.
     */
    where: ProductCharacteristicWhereUniqueInput
  }

  /**
   * ProductCharacteristic findUniqueOrThrow
   */
  export type ProductCharacteristicFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCharacteristic
     */
    select?: ProductCharacteristicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCharacteristic
     */
    omit?: ProductCharacteristicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCharacteristicInclude<ExtArgs> | null
    /**
     * Filter, which ProductCharacteristic to fetch.
     */
    where: ProductCharacteristicWhereUniqueInput
  }

  /**
   * ProductCharacteristic findFirst
   */
  export type ProductCharacteristicFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCharacteristic
     */
    select?: ProductCharacteristicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCharacteristic
     */
    omit?: ProductCharacteristicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCharacteristicInclude<ExtArgs> | null
    /**
     * Filter, which ProductCharacteristic to fetch.
     */
    where?: ProductCharacteristicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductCharacteristics to fetch.
     */
    orderBy?: ProductCharacteristicOrderByWithRelationInput | ProductCharacteristicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductCharacteristics.
     */
    cursor?: ProductCharacteristicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductCharacteristics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductCharacteristics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductCharacteristics.
     */
    distinct?: ProductCharacteristicScalarFieldEnum | ProductCharacteristicScalarFieldEnum[]
  }

  /**
   * ProductCharacteristic findFirstOrThrow
   */
  export type ProductCharacteristicFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCharacteristic
     */
    select?: ProductCharacteristicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCharacteristic
     */
    omit?: ProductCharacteristicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCharacteristicInclude<ExtArgs> | null
    /**
     * Filter, which ProductCharacteristic to fetch.
     */
    where?: ProductCharacteristicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductCharacteristics to fetch.
     */
    orderBy?: ProductCharacteristicOrderByWithRelationInput | ProductCharacteristicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductCharacteristics.
     */
    cursor?: ProductCharacteristicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductCharacteristics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductCharacteristics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductCharacteristics.
     */
    distinct?: ProductCharacteristicScalarFieldEnum | ProductCharacteristicScalarFieldEnum[]
  }

  /**
   * ProductCharacteristic findMany
   */
  export type ProductCharacteristicFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCharacteristic
     */
    select?: ProductCharacteristicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCharacteristic
     */
    omit?: ProductCharacteristicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCharacteristicInclude<ExtArgs> | null
    /**
     * Filter, which ProductCharacteristics to fetch.
     */
    where?: ProductCharacteristicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductCharacteristics to fetch.
     */
    orderBy?: ProductCharacteristicOrderByWithRelationInput | ProductCharacteristicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductCharacteristics.
     */
    cursor?: ProductCharacteristicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductCharacteristics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductCharacteristics.
     */
    skip?: number
    distinct?: ProductCharacteristicScalarFieldEnum | ProductCharacteristicScalarFieldEnum[]
  }

  /**
   * ProductCharacteristic create
   */
  export type ProductCharacteristicCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCharacteristic
     */
    select?: ProductCharacteristicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCharacteristic
     */
    omit?: ProductCharacteristicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCharacteristicInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductCharacteristic.
     */
    data: XOR<ProductCharacteristicCreateInput, ProductCharacteristicUncheckedCreateInput>
  }

  /**
   * ProductCharacteristic createMany
   */
  export type ProductCharacteristicCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductCharacteristics.
     */
    data: ProductCharacteristicCreateManyInput | ProductCharacteristicCreateManyInput[]
  }

  /**
   * ProductCharacteristic createManyAndReturn
   */
  export type ProductCharacteristicCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCharacteristic
     */
    select?: ProductCharacteristicSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCharacteristic
     */
    omit?: ProductCharacteristicOmit<ExtArgs> | null
    /**
     * The data used to create many ProductCharacteristics.
     */
    data: ProductCharacteristicCreateManyInput | ProductCharacteristicCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCharacteristicIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductCharacteristic update
   */
  export type ProductCharacteristicUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCharacteristic
     */
    select?: ProductCharacteristicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCharacteristic
     */
    omit?: ProductCharacteristicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCharacteristicInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductCharacteristic.
     */
    data: XOR<ProductCharacteristicUpdateInput, ProductCharacteristicUncheckedUpdateInput>
    /**
     * Choose, which ProductCharacteristic to update.
     */
    where: ProductCharacteristicWhereUniqueInput
  }

  /**
   * ProductCharacteristic updateMany
   */
  export type ProductCharacteristicUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductCharacteristics.
     */
    data: XOR<ProductCharacteristicUpdateManyMutationInput, ProductCharacteristicUncheckedUpdateManyInput>
    /**
     * Filter which ProductCharacteristics to update
     */
    where?: ProductCharacteristicWhereInput
    /**
     * Limit how many ProductCharacteristics to update.
     */
    limit?: number
  }

  /**
   * ProductCharacteristic updateManyAndReturn
   */
  export type ProductCharacteristicUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCharacteristic
     */
    select?: ProductCharacteristicSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCharacteristic
     */
    omit?: ProductCharacteristicOmit<ExtArgs> | null
    /**
     * The data used to update ProductCharacteristics.
     */
    data: XOR<ProductCharacteristicUpdateManyMutationInput, ProductCharacteristicUncheckedUpdateManyInput>
    /**
     * Filter which ProductCharacteristics to update
     */
    where?: ProductCharacteristicWhereInput
    /**
     * Limit how many ProductCharacteristics to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCharacteristicIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductCharacteristic upsert
   */
  export type ProductCharacteristicUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCharacteristic
     */
    select?: ProductCharacteristicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCharacteristic
     */
    omit?: ProductCharacteristicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCharacteristicInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductCharacteristic to update in case it exists.
     */
    where: ProductCharacteristicWhereUniqueInput
    /**
     * In case the ProductCharacteristic found by the `where` argument doesn't exist, create a new ProductCharacteristic with this data.
     */
    create: XOR<ProductCharacteristicCreateInput, ProductCharacteristicUncheckedCreateInput>
    /**
     * In case the ProductCharacteristic was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductCharacteristicUpdateInput, ProductCharacteristicUncheckedUpdateInput>
  }

  /**
   * ProductCharacteristic delete
   */
  export type ProductCharacteristicDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCharacteristic
     */
    select?: ProductCharacteristicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCharacteristic
     */
    omit?: ProductCharacteristicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCharacteristicInclude<ExtArgs> | null
    /**
     * Filter which ProductCharacteristic to delete.
     */
    where: ProductCharacteristicWhereUniqueInput
  }

  /**
   * ProductCharacteristic deleteMany
   */
  export type ProductCharacteristicDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductCharacteristics to delete
     */
    where?: ProductCharacteristicWhereInput
    /**
     * Limit how many ProductCharacteristics to delete.
     */
    limit?: number
  }

  /**
   * ProductCharacteristic without action
   */
  export type ProductCharacteristicDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCharacteristic
     */
    select?: ProductCharacteristicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCharacteristic
     */
    omit?: ProductCharacteristicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCharacteristicInclude<ExtArgs> | null
  }


  /**
   * Model GmailCode
   */

  export type AggregateGmailCode = {
    _count: GmailCodeCountAggregateOutputType | null
    _avg: GmailCodeAvgAggregateOutputType | null
    _sum: GmailCodeSumAggregateOutputType | null
    _min: GmailCodeMinAggregateOutputType | null
    _max: GmailCodeMaxAggregateOutputType | null
  }

  export type GmailCodeAvgAggregateOutputType = {
    id: number | null
    code: number | null
  }

  export type GmailCodeSumAggregateOutputType = {
    id: number | null
    code: number | null
  }

  export type GmailCodeMinAggregateOutputType = {
    id: number | null
    code: number | null
  }

  export type GmailCodeMaxAggregateOutputType = {
    id: number | null
    code: number | null
  }

  export type GmailCodeCountAggregateOutputType = {
    id: number
    code: number
    _all: number
  }


  export type GmailCodeAvgAggregateInputType = {
    id?: true
    code?: true
  }

  export type GmailCodeSumAggregateInputType = {
    id?: true
    code?: true
  }

  export type GmailCodeMinAggregateInputType = {
    id?: true
    code?: true
  }

  export type GmailCodeMaxAggregateInputType = {
    id?: true
    code?: true
  }

  export type GmailCodeCountAggregateInputType = {
    id?: true
    code?: true
    _all?: true
  }

  export type GmailCodeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GmailCode to aggregate.
     */
    where?: GmailCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GmailCodes to fetch.
     */
    orderBy?: GmailCodeOrderByWithRelationInput | GmailCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GmailCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GmailCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GmailCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GmailCodes
    **/
    _count?: true | GmailCodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GmailCodeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GmailCodeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GmailCodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GmailCodeMaxAggregateInputType
  }

  export type GetGmailCodeAggregateType<T extends GmailCodeAggregateArgs> = {
        [P in keyof T & keyof AggregateGmailCode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGmailCode[P]>
      : GetScalarType<T[P], AggregateGmailCode[P]>
  }




  export type GmailCodeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GmailCodeWhereInput
    orderBy?: GmailCodeOrderByWithAggregationInput | GmailCodeOrderByWithAggregationInput[]
    by: GmailCodeScalarFieldEnum[] | GmailCodeScalarFieldEnum
    having?: GmailCodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GmailCodeCountAggregateInputType | true
    _avg?: GmailCodeAvgAggregateInputType
    _sum?: GmailCodeSumAggregateInputType
    _min?: GmailCodeMinAggregateInputType
    _max?: GmailCodeMaxAggregateInputType
  }

  export type GmailCodeGroupByOutputType = {
    id: number
    code: number
    _count: GmailCodeCountAggregateOutputType | null
    _avg: GmailCodeAvgAggregateOutputType | null
    _sum: GmailCodeSumAggregateOutputType | null
    _min: GmailCodeMinAggregateOutputType | null
    _max: GmailCodeMaxAggregateOutputType | null
  }

  type GetGmailCodeGroupByPayload<T extends GmailCodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GmailCodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GmailCodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GmailCodeGroupByOutputType[P]>
            : GetScalarType<T[P], GmailCodeGroupByOutputType[P]>
        }
      >
    >


  export type GmailCodeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
  }, ExtArgs["result"]["gmailCode"]>

  export type GmailCodeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
  }, ExtArgs["result"]["gmailCode"]>

  export type GmailCodeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
  }, ExtArgs["result"]["gmailCode"]>

  export type GmailCodeSelectScalar = {
    id?: boolean
    code?: boolean
  }

  export type GmailCodeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code", ExtArgs["result"]["gmailCode"]>

  export type $GmailCodePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GmailCode"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      code: number
    }, ExtArgs["result"]["gmailCode"]>
    composites: {}
  }

  type GmailCodeGetPayload<S extends boolean | null | undefined | GmailCodeDefaultArgs> = $Result.GetResult<Prisma.$GmailCodePayload, S>

  type GmailCodeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GmailCodeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GmailCodeCountAggregateInputType | true
    }

  export interface GmailCodeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GmailCode'], meta: { name: 'GmailCode' } }
    /**
     * Find zero or one GmailCode that matches the filter.
     * @param {GmailCodeFindUniqueArgs} args - Arguments to find a GmailCode
     * @example
     * // Get one GmailCode
     * const gmailCode = await prisma.gmailCode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GmailCodeFindUniqueArgs>(args: SelectSubset<T, GmailCodeFindUniqueArgs<ExtArgs>>): Prisma__GmailCodeClient<$Result.GetResult<Prisma.$GmailCodePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GmailCode that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GmailCodeFindUniqueOrThrowArgs} args - Arguments to find a GmailCode
     * @example
     * // Get one GmailCode
     * const gmailCode = await prisma.gmailCode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GmailCodeFindUniqueOrThrowArgs>(args: SelectSubset<T, GmailCodeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GmailCodeClient<$Result.GetResult<Prisma.$GmailCodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GmailCode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GmailCodeFindFirstArgs} args - Arguments to find a GmailCode
     * @example
     * // Get one GmailCode
     * const gmailCode = await prisma.gmailCode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GmailCodeFindFirstArgs>(args?: SelectSubset<T, GmailCodeFindFirstArgs<ExtArgs>>): Prisma__GmailCodeClient<$Result.GetResult<Prisma.$GmailCodePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GmailCode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GmailCodeFindFirstOrThrowArgs} args - Arguments to find a GmailCode
     * @example
     * // Get one GmailCode
     * const gmailCode = await prisma.gmailCode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GmailCodeFindFirstOrThrowArgs>(args?: SelectSubset<T, GmailCodeFindFirstOrThrowArgs<ExtArgs>>): Prisma__GmailCodeClient<$Result.GetResult<Prisma.$GmailCodePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GmailCodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GmailCodeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GmailCodes
     * const gmailCodes = await prisma.gmailCode.findMany()
     * 
     * // Get first 10 GmailCodes
     * const gmailCodes = await prisma.gmailCode.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gmailCodeWithIdOnly = await prisma.gmailCode.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GmailCodeFindManyArgs>(args?: SelectSubset<T, GmailCodeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GmailCodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GmailCode.
     * @param {GmailCodeCreateArgs} args - Arguments to create a GmailCode.
     * @example
     * // Create one GmailCode
     * const GmailCode = await prisma.gmailCode.create({
     *   data: {
     *     // ... data to create a GmailCode
     *   }
     * })
     * 
     */
    create<T extends GmailCodeCreateArgs>(args: SelectSubset<T, GmailCodeCreateArgs<ExtArgs>>): Prisma__GmailCodeClient<$Result.GetResult<Prisma.$GmailCodePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GmailCodes.
     * @param {GmailCodeCreateManyArgs} args - Arguments to create many GmailCodes.
     * @example
     * // Create many GmailCodes
     * const gmailCode = await prisma.gmailCode.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GmailCodeCreateManyArgs>(args?: SelectSubset<T, GmailCodeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GmailCodes and returns the data saved in the database.
     * @param {GmailCodeCreateManyAndReturnArgs} args - Arguments to create many GmailCodes.
     * @example
     * // Create many GmailCodes
     * const gmailCode = await prisma.gmailCode.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GmailCodes and only return the `id`
     * const gmailCodeWithIdOnly = await prisma.gmailCode.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GmailCodeCreateManyAndReturnArgs>(args?: SelectSubset<T, GmailCodeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GmailCodePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GmailCode.
     * @param {GmailCodeDeleteArgs} args - Arguments to delete one GmailCode.
     * @example
     * // Delete one GmailCode
     * const GmailCode = await prisma.gmailCode.delete({
     *   where: {
     *     // ... filter to delete one GmailCode
     *   }
     * })
     * 
     */
    delete<T extends GmailCodeDeleteArgs>(args: SelectSubset<T, GmailCodeDeleteArgs<ExtArgs>>): Prisma__GmailCodeClient<$Result.GetResult<Prisma.$GmailCodePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GmailCode.
     * @param {GmailCodeUpdateArgs} args - Arguments to update one GmailCode.
     * @example
     * // Update one GmailCode
     * const gmailCode = await prisma.gmailCode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GmailCodeUpdateArgs>(args: SelectSubset<T, GmailCodeUpdateArgs<ExtArgs>>): Prisma__GmailCodeClient<$Result.GetResult<Prisma.$GmailCodePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GmailCodes.
     * @param {GmailCodeDeleteManyArgs} args - Arguments to filter GmailCodes to delete.
     * @example
     * // Delete a few GmailCodes
     * const { count } = await prisma.gmailCode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GmailCodeDeleteManyArgs>(args?: SelectSubset<T, GmailCodeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GmailCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GmailCodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GmailCodes
     * const gmailCode = await prisma.gmailCode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GmailCodeUpdateManyArgs>(args: SelectSubset<T, GmailCodeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GmailCodes and returns the data updated in the database.
     * @param {GmailCodeUpdateManyAndReturnArgs} args - Arguments to update many GmailCodes.
     * @example
     * // Update many GmailCodes
     * const gmailCode = await prisma.gmailCode.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GmailCodes and only return the `id`
     * const gmailCodeWithIdOnly = await prisma.gmailCode.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GmailCodeUpdateManyAndReturnArgs>(args: SelectSubset<T, GmailCodeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GmailCodePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GmailCode.
     * @param {GmailCodeUpsertArgs} args - Arguments to update or create a GmailCode.
     * @example
     * // Update or create a GmailCode
     * const gmailCode = await prisma.gmailCode.upsert({
     *   create: {
     *     // ... data to create a GmailCode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GmailCode we want to update
     *   }
     * })
     */
    upsert<T extends GmailCodeUpsertArgs>(args: SelectSubset<T, GmailCodeUpsertArgs<ExtArgs>>): Prisma__GmailCodeClient<$Result.GetResult<Prisma.$GmailCodePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GmailCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GmailCodeCountArgs} args - Arguments to filter GmailCodes to count.
     * @example
     * // Count the number of GmailCodes
     * const count = await prisma.gmailCode.count({
     *   where: {
     *     // ... the filter for the GmailCodes we want to count
     *   }
     * })
    **/
    count<T extends GmailCodeCountArgs>(
      args?: Subset<T, GmailCodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GmailCodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GmailCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GmailCodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GmailCodeAggregateArgs>(args: Subset<T, GmailCodeAggregateArgs>): Prisma.PrismaPromise<GetGmailCodeAggregateType<T>>

    /**
     * Group by GmailCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GmailCodeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GmailCodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GmailCodeGroupByArgs['orderBy'] }
        : { orderBy?: GmailCodeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
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
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GmailCodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGmailCodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GmailCode model
   */
  readonly fields: GmailCodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GmailCode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GmailCodeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GmailCode model
   */
  interface GmailCodeFieldRefs {
    readonly id: FieldRef<"GmailCode", 'Int'>
    readonly code: FieldRef<"GmailCode", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * GmailCode findUnique
   */
  export type GmailCodeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GmailCode
     */
    select?: GmailCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GmailCode
     */
    omit?: GmailCodeOmit<ExtArgs> | null
    /**
     * Filter, which GmailCode to fetch.
     */
    where: GmailCodeWhereUniqueInput
  }

  /**
   * GmailCode findUniqueOrThrow
   */
  export type GmailCodeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GmailCode
     */
    select?: GmailCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GmailCode
     */
    omit?: GmailCodeOmit<ExtArgs> | null
    /**
     * Filter, which GmailCode to fetch.
     */
    where: GmailCodeWhereUniqueInput
  }

  /**
   * GmailCode findFirst
   */
  export type GmailCodeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GmailCode
     */
    select?: GmailCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GmailCode
     */
    omit?: GmailCodeOmit<ExtArgs> | null
    /**
     * Filter, which GmailCode to fetch.
     */
    where?: GmailCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GmailCodes to fetch.
     */
    orderBy?: GmailCodeOrderByWithRelationInput | GmailCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GmailCodes.
     */
    cursor?: GmailCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GmailCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GmailCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GmailCodes.
     */
    distinct?: GmailCodeScalarFieldEnum | GmailCodeScalarFieldEnum[]
  }

  /**
   * GmailCode findFirstOrThrow
   */
  export type GmailCodeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GmailCode
     */
    select?: GmailCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GmailCode
     */
    omit?: GmailCodeOmit<ExtArgs> | null
    /**
     * Filter, which GmailCode to fetch.
     */
    where?: GmailCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GmailCodes to fetch.
     */
    orderBy?: GmailCodeOrderByWithRelationInput | GmailCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GmailCodes.
     */
    cursor?: GmailCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GmailCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GmailCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GmailCodes.
     */
    distinct?: GmailCodeScalarFieldEnum | GmailCodeScalarFieldEnum[]
  }

  /**
   * GmailCode findMany
   */
  export type GmailCodeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GmailCode
     */
    select?: GmailCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GmailCode
     */
    omit?: GmailCodeOmit<ExtArgs> | null
    /**
     * Filter, which GmailCodes to fetch.
     */
    where?: GmailCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GmailCodes to fetch.
     */
    orderBy?: GmailCodeOrderByWithRelationInput | GmailCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GmailCodes.
     */
    cursor?: GmailCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GmailCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GmailCodes.
     */
    skip?: number
    distinct?: GmailCodeScalarFieldEnum | GmailCodeScalarFieldEnum[]
  }

  /**
   * GmailCode create
   */
  export type GmailCodeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GmailCode
     */
    select?: GmailCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GmailCode
     */
    omit?: GmailCodeOmit<ExtArgs> | null
    /**
     * The data needed to create a GmailCode.
     */
    data: XOR<GmailCodeCreateInput, GmailCodeUncheckedCreateInput>
  }

  /**
   * GmailCode createMany
   */
  export type GmailCodeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GmailCodes.
     */
    data: GmailCodeCreateManyInput | GmailCodeCreateManyInput[]
  }

  /**
   * GmailCode createManyAndReturn
   */
  export type GmailCodeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GmailCode
     */
    select?: GmailCodeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GmailCode
     */
    omit?: GmailCodeOmit<ExtArgs> | null
    /**
     * The data used to create many GmailCodes.
     */
    data: GmailCodeCreateManyInput | GmailCodeCreateManyInput[]
  }

  /**
   * GmailCode update
   */
  export type GmailCodeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GmailCode
     */
    select?: GmailCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GmailCode
     */
    omit?: GmailCodeOmit<ExtArgs> | null
    /**
     * The data needed to update a GmailCode.
     */
    data: XOR<GmailCodeUpdateInput, GmailCodeUncheckedUpdateInput>
    /**
     * Choose, which GmailCode to update.
     */
    where: GmailCodeWhereUniqueInput
  }

  /**
   * GmailCode updateMany
   */
  export type GmailCodeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GmailCodes.
     */
    data: XOR<GmailCodeUpdateManyMutationInput, GmailCodeUncheckedUpdateManyInput>
    /**
     * Filter which GmailCodes to update
     */
    where?: GmailCodeWhereInput
    /**
     * Limit how many GmailCodes to update.
     */
    limit?: number
  }

  /**
   * GmailCode updateManyAndReturn
   */
  export type GmailCodeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GmailCode
     */
    select?: GmailCodeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GmailCode
     */
    omit?: GmailCodeOmit<ExtArgs> | null
    /**
     * The data used to update GmailCodes.
     */
    data: XOR<GmailCodeUpdateManyMutationInput, GmailCodeUncheckedUpdateManyInput>
    /**
     * Filter which GmailCodes to update
     */
    where?: GmailCodeWhereInput
    /**
     * Limit how many GmailCodes to update.
     */
    limit?: number
  }

  /**
   * GmailCode upsert
   */
  export type GmailCodeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GmailCode
     */
    select?: GmailCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GmailCode
     */
    omit?: GmailCodeOmit<ExtArgs> | null
    /**
     * The filter to search for the GmailCode to update in case it exists.
     */
    where: GmailCodeWhereUniqueInput
    /**
     * In case the GmailCode found by the `where` argument doesn't exist, create a new GmailCode with this data.
     */
    create: XOR<GmailCodeCreateInput, GmailCodeUncheckedCreateInput>
    /**
     * In case the GmailCode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GmailCodeUpdateInput, GmailCodeUncheckedUpdateInput>
  }

  /**
   * GmailCode delete
   */
  export type GmailCodeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GmailCode
     */
    select?: GmailCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GmailCode
     */
    omit?: GmailCodeOmit<ExtArgs> | null
    /**
     * Filter which GmailCode to delete.
     */
    where: GmailCodeWhereUniqueInput
  }

  /**
   * GmailCode deleteMany
   */
  export type GmailCodeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GmailCodes to delete
     */
    where?: GmailCodeWhereInput
    /**
     * Limit how many GmailCodes to delete.
     */
    limit?: number
  }

  /**
   * GmailCode without action
   */
  export type GmailCodeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GmailCode
     */
    select?: GmailCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GmailCode
     */
    omit?: GmailCodeOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    password: 'password',
    isAdmin: 'isAdmin',
    name: 'name',
    surname: 'surname',
    middleName: 'middleName',
    birthday: 'birthday',
    phoneNumber: 'phoneNumber'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AdressScalarFieldEnum: {
    id: 'id',
    postDepartament: 'postDepartament',
    street: 'street',
    home: 'home',
    appartament: 'appartament',
    entrants: 'entrants',
    userId: 'userId'
  };

  export type AdressScalarFieldEnum = (typeof AdressScalarFieldEnum)[keyof typeof AdressScalarFieldEnum]


  export const UserInfoScalarFieldEnum: {
    id: 'id',
    name: 'name',
    surname: 'surname',
    middleName: 'middleName',
    birthday: 'birthday',
    phoneNumber: 'phoneNumber',
    userId: 'userId'
  };

  export type UserInfoScalarFieldEnum = (typeof UserInfoScalarFieldEnum)[keyof typeof UserInfoScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    totalPrice: 'totalPrice',
    status: 'status',
    createdAt: 'createdAt',
    userId: 'userId',
    userAdressId: 'userAdressId'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const OrderProductScalarFieldEnum: {
    id: 'id',
    amount: 'amount',
    priceInPurchase: 'priceInPurchase',
    productId: 'productId'
  };

  export type OrderProductScalarFieldEnum = (typeof OrderProductScalarFieldEnum)[keyof typeof OrderProductScalarFieldEnum]


  export const UserOrderCommentScalarFieldEnum: {
    id: 'id',
    comment: 'comment',
    userId: 'userId'
  };

  export type UserOrderCommentScalarFieldEnum = (typeof UserOrderCommentScalarFieldEnum)[keyof typeof UserOrderCommentScalarFieldEnum]


  export const ContactsMessageScalarFieldEnum: {
    id: 'id',
    message: 'message',
    userId: 'userId'
  };

  export type ContactsMessageScalarFieldEnum = (typeof ContactsMessageScalarFieldEnum)[keyof typeof ContactsMessageScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    color: 'color',
    price: 'price',
    discount: 'discount',
    img: 'img',
    creationDate: 'creationDate'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const CartsProductScalarFieldEnum: {
    id: 'id',
    amout: 'amout',
    userId: 'userId'
  };

  export type CartsProductScalarFieldEnum = (typeof CartsProductScalarFieldEnum)[keyof typeof CartsProductScalarFieldEnum]


  export const ProductDescriptionScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    img: 'img',
    productId: 'productId'
  };

  export type ProductDescriptionScalarFieldEnum = (typeof ProductDescriptionScalarFieldEnum)[keyof typeof ProductDescriptionScalarFieldEnum]


  export const ProductCharacteristicScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    img: 'img',
    coding: 'coding',
    ufsStorage: 'ufsStorage',
    eMMSStorage: 'eMMSStorage',
    productId: 'productId'
  };

  export type ProductCharacteristicScalarFieldEnum = (typeof ProductCharacteristicScalarFieldEnum)[keyof typeof ProductCharacteristicScalarFieldEnum]


  export const GmailCodeScalarFieldEnum: {
    id: 'id',
    code: 'code'
  };

  export type GmailCodeScalarFieldEnum = (typeof GmailCodeScalarFieldEnum)[keyof typeof GmailCodeScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    isAdmin?: BoolFilter<"User"> | boolean
    name?: StringNullableFilter<"User"> | string | null
    surname?: StringNullableFilter<"User"> | string | null
    middleName?: StringNullableFilter<"User"> | string | null
    birthday?: StringNullableFilter<"User"> | string | null
    phoneNumber?: StringNullableFilter<"User"> | string | null
    contactsMessages?: ContactsMessageListRelationFilter
    userInfo?: XOR<UserInfoNullableScalarRelationFilter, UserInfoWhereInput> | null
    userOrderComment?: UserOrderCommentListRelationFilter
    userAdress?: AdressListRelationFilter
    order?: OrderListRelationFilter
    cartsProduct?: XOR<CartsProductNullableScalarRelationFilter, CartsProductWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isAdmin?: SortOrder
    name?: SortOrderInput | SortOrder
    surname?: SortOrderInput | SortOrder
    middleName?: SortOrderInput | SortOrder
    birthday?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    contactsMessages?: ContactsMessageOrderByRelationAggregateInput
    userInfo?: UserInfoOrderByWithRelationInput
    userOrderComment?: UserOrderCommentOrderByRelationAggregateInput
    userAdress?: AdressOrderByRelationAggregateInput
    order?: OrderOrderByRelationAggregateInput
    cartsProduct?: CartsProductOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    isAdmin?: BoolFilter<"User"> | boolean
    name?: StringNullableFilter<"User"> | string | null
    surname?: StringNullableFilter<"User"> | string | null
    middleName?: StringNullableFilter<"User"> | string | null
    birthday?: StringNullableFilter<"User"> | string | null
    phoneNumber?: StringNullableFilter<"User"> | string | null
    contactsMessages?: ContactsMessageListRelationFilter
    userInfo?: XOR<UserInfoNullableScalarRelationFilter, UserInfoWhereInput> | null
    userOrderComment?: UserOrderCommentListRelationFilter
    userAdress?: AdressListRelationFilter
    order?: OrderListRelationFilter
    cartsProduct?: XOR<CartsProductNullableScalarRelationFilter, CartsProductWhereInput> | null
  }, "id" | "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isAdmin?: SortOrder
    name?: SortOrderInput | SortOrder
    surname?: SortOrderInput | SortOrder
    middleName?: SortOrderInput | SortOrder
    birthday?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    isAdmin?: BoolWithAggregatesFilter<"User"> | boolean
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    surname?: StringNullableWithAggregatesFilter<"User"> | string | null
    middleName?: StringNullableWithAggregatesFilter<"User"> | string | null
    birthday?: StringNullableWithAggregatesFilter<"User"> | string | null
    phoneNumber?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type AdressWhereInput = {
    AND?: AdressWhereInput | AdressWhereInput[]
    OR?: AdressWhereInput[]
    NOT?: AdressWhereInput | AdressWhereInput[]
    id?: IntFilter<"Adress"> | number
    postDepartament?: StringFilter<"Adress"> | string
    street?: StringFilter<"Adress"> | string
    home?: StringFilter<"Adress"> | string
    appartament?: IntFilter<"Adress"> | number
    entrants?: IntFilter<"Adress"> | number
    userId?: IntFilter<"Adress"> | number
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    order?: OrderListRelationFilter
  }

  export type AdressOrderByWithRelationInput = {
    id?: SortOrder
    postDepartament?: SortOrder
    street?: SortOrder
    home?: SortOrder
    appartament?: SortOrder
    entrants?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    order?: OrderOrderByRelationAggregateInput
  }

  export type AdressWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AdressWhereInput | AdressWhereInput[]
    OR?: AdressWhereInput[]
    NOT?: AdressWhereInput | AdressWhereInput[]
    postDepartament?: StringFilter<"Adress"> | string
    street?: StringFilter<"Adress"> | string
    home?: StringFilter<"Adress"> | string
    appartament?: IntFilter<"Adress"> | number
    entrants?: IntFilter<"Adress"> | number
    userId?: IntFilter<"Adress"> | number
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    order?: OrderListRelationFilter
  }, "id" | "id">

  export type AdressOrderByWithAggregationInput = {
    id?: SortOrder
    postDepartament?: SortOrder
    street?: SortOrder
    home?: SortOrder
    appartament?: SortOrder
    entrants?: SortOrder
    userId?: SortOrder
    _count?: AdressCountOrderByAggregateInput
    _avg?: AdressAvgOrderByAggregateInput
    _max?: AdressMaxOrderByAggregateInput
    _min?: AdressMinOrderByAggregateInput
    _sum?: AdressSumOrderByAggregateInput
  }

  export type AdressScalarWhereWithAggregatesInput = {
    AND?: AdressScalarWhereWithAggregatesInput | AdressScalarWhereWithAggregatesInput[]
    OR?: AdressScalarWhereWithAggregatesInput[]
    NOT?: AdressScalarWhereWithAggregatesInput | AdressScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Adress"> | number
    postDepartament?: StringWithAggregatesFilter<"Adress"> | string
    street?: StringWithAggregatesFilter<"Adress"> | string
    home?: StringWithAggregatesFilter<"Adress"> | string
    appartament?: IntWithAggregatesFilter<"Adress"> | number
    entrants?: IntWithAggregatesFilter<"Adress"> | number
    userId?: IntWithAggregatesFilter<"Adress"> | number
  }

  export type UserInfoWhereInput = {
    AND?: UserInfoWhereInput | UserInfoWhereInput[]
    OR?: UserInfoWhereInput[]
    NOT?: UserInfoWhereInput | UserInfoWhereInput[]
    id?: IntFilter<"UserInfo"> | number
    name?: StringFilter<"UserInfo"> | string
    surname?: StringFilter<"UserInfo"> | string
    middleName?: StringFilter<"UserInfo"> | string
    birthday?: DateTimeFilter<"UserInfo"> | Date | string
    phoneNumber?: IntFilter<"UserInfo"> | number
    userId?: IntFilter<"UserInfo"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserInfoOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    middleName?: SortOrder
    birthday?: SortOrder
    phoneNumber?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserInfoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: UserInfoWhereInput | UserInfoWhereInput[]
    OR?: UserInfoWhereInput[]
    NOT?: UserInfoWhereInput | UserInfoWhereInput[]
    name?: StringFilter<"UserInfo"> | string
    surname?: StringFilter<"UserInfo"> | string
    middleName?: StringFilter<"UserInfo"> | string
    birthday?: DateTimeFilter<"UserInfo"> | Date | string
    phoneNumber?: IntFilter<"UserInfo"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "id" | "userId">

  export type UserInfoOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    middleName?: SortOrder
    birthday?: SortOrder
    phoneNumber?: SortOrder
    userId?: SortOrder
    _count?: UserInfoCountOrderByAggregateInput
    _avg?: UserInfoAvgOrderByAggregateInput
    _max?: UserInfoMaxOrderByAggregateInput
    _min?: UserInfoMinOrderByAggregateInput
    _sum?: UserInfoSumOrderByAggregateInput
  }

  export type UserInfoScalarWhereWithAggregatesInput = {
    AND?: UserInfoScalarWhereWithAggregatesInput | UserInfoScalarWhereWithAggregatesInput[]
    OR?: UserInfoScalarWhereWithAggregatesInput[]
    NOT?: UserInfoScalarWhereWithAggregatesInput | UserInfoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserInfo"> | number
    name?: StringWithAggregatesFilter<"UserInfo"> | string
    surname?: StringWithAggregatesFilter<"UserInfo"> | string
    middleName?: StringWithAggregatesFilter<"UserInfo"> | string
    birthday?: DateTimeWithAggregatesFilter<"UserInfo"> | Date | string
    phoneNumber?: IntWithAggregatesFilter<"UserInfo"> | number
    userId?: IntWithAggregatesFilter<"UserInfo"> | number
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: IntFilter<"Order"> | number
    totalPrice?: IntFilter<"Order"> | number
    status?: StringFilter<"Order"> | string
    createdAt?: StringFilter<"Order"> | string
    userId?: IntFilter<"Order"> | number
    userAdressId?: IntFilter<"Order"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    userAdress?: XOR<AdressNullableScalarRelationFilter, AdressWhereInput> | null
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    totalPrice?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    userAdressId?: SortOrder
    user?: UserOrderByWithRelationInput
    userAdress?: AdressOrderByWithRelationInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    totalPrice?: IntFilter<"Order"> | number
    status?: StringFilter<"Order"> | string
    createdAt?: StringFilter<"Order"> | string
    userId?: IntFilter<"Order"> | number
    userAdressId?: IntFilter<"Order"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    userAdress?: XOR<AdressNullableScalarRelationFilter, AdressWhereInput> | null
  }, "id" | "id">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    totalPrice?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    userAdressId?: SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Order"> | number
    totalPrice?: IntWithAggregatesFilter<"Order"> | number
    status?: StringWithAggregatesFilter<"Order"> | string
    createdAt?: StringWithAggregatesFilter<"Order"> | string
    userId?: IntWithAggregatesFilter<"Order"> | number
    userAdressId?: IntWithAggregatesFilter<"Order"> | number
  }

  export type OrderProductWhereInput = {
    AND?: OrderProductWhereInput | OrderProductWhereInput[]
    OR?: OrderProductWhereInput[]
    NOT?: OrderProductWhereInput | OrderProductWhereInput[]
    id?: IntFilter<"OrderProduct"> | number
    amount?: IntFilter<"OrderProduct"> | number
    priceInPurchase?: IntFilter<"OrderProduct"> | number
    productId?: IntFilter<"OrderProduct"> | number
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type OrderProductOrderByWithRelationInput = {
    id?: SortOrder
    amount?: SortOrder
    priceInPurchase?: SortOrder
    productId?: SortOrder
    product?: ProductOrderByWithRelationInput
  }

  export type OrderProductWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OrderProductWhereInput | OrderProductWhereInput[]
    OR?: OrderProductWhereInput[]
    NOT?: OrderProductWhereInput | OrderProductWhereInput[]
    amount?: IntFilter<"OrderProduct"> | number
    priceInPurchase?: IntFilter<"OrderProduct"> | number
    productId?: IntFilter<"OrderProduct"> | number
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id" | "id">

  export type OrderProductOrderByWithAggregationInput = {
    id?: SortOrder
    amount?: SortOrder
    priceInPurchase?: SortOrder
    productId?: SortOrder
    _count?: OrderProductCountOrderByAggregateInput
    _avg?: OrderProductAvgOrderByAggregateInput
    _max?: OrderProductMaxOrderByAggregateInput
    _min?: OrderProductMinOrderByAggregateInput
    _sum?: OrderProductSumOrderByAggregateInput
  }

  export type OrderProductScalarWhereWithAggregatesInput = {
    AND?: OrderProductScalarWhereWithAggregatesInput | OrderProductScalarWhereWithAggregatesInput[]
    OR?: OrderProductScalarWhereWithAggregatesInput[]
    NOT?: OrderProductScalarWhereWithAggregatesInput | OrderProductScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"OrderProduct"> | number
    amount?: IntWithAggregatesFilter<"OrderProduct"> | number
    priceInPurchase?: IntWithAggregatesFilter<"OrderProduct"> | number
    productId?: IntWithAggregatesFilter<"OrderProduct"> | number
  }

  export type UserOrderCommentWhereInput = {
    AND?: UserOrderCommentWhereInput | UserOrderCommentWhereInput[]
    OR?: UserOrderCommentWhereInput[]
    NOT?: UserOrderCommentWhereInput | UserOrderCommentWhereInput[]
    id?: IntFilter<"UserOrderComment"> | number
    comment?: StringFilter<"UserOrderComment"> | string
    userId?: IntFilter<"UserOrderComment"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserOrderCommentOrderByWithRelationInput = {
    id?: SortOrder
    comment?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserOrderCommentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserOrderCommentWhereInput | UserOrderCommentWhereInput[]
    OR?: UserOrderCommentWhereInput[]
    NOT?: UserOrderCommentWhereInput | UserOrderCommentWhereInput[]
    comment?: StringFilter<"UserOrderComment"> | string
    userId?: IntFilter<"UserOrderComment"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "id">

  export type UserOrderCommentOrderByWithAggregationInput = {
    id?: SortOrder
    comment?: SortOrder
    userId?: SortOrder
    _count?: UserOrderCommentCountOrderByAggregateInput
    _avg?: UserOrderCommentAvgOrderByAggregateInput
    _max?: UserOrderCommentMaxOrderByAggregateInput
    _min?: UserOrderCommentMinOrderByAggregateInput
    _sum?: UserOrderCommentSumOrderByAggregateInput
  }

  export type UserOrderCommentScalarWhereWithAggregatesInput = {
    AND?: UserOrderCommentScalarWhereWithAggregatesInput | UserOrderCommentScalarWhereWithAggregatesInput[]
    OR?: UserOrderCommentScalarWhereWithAggregatesInput[]
    NOT?: UserOrderCommentScalarWhereWithAggregatesInput | UserOrderCommentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserOrderComment"> | number
    comment?: StringWithAggregatesFilter<"UserOrderComment"> | string
    userId?: IntWithAggregatesFilter<"UserOrderComment"> | number
  }

  export type ContactsMessageWhereInput = {
    AND?: ContactsMessageWhereInput | ContactsMessageWhereInput[]
    OR?: ContactsMessageWhereInput[]
    NOT?: ContactsMessageWhereInput | ContactsMessageWhereInput[]
    id?: IntFilter<"ContactsMessage"> | number
    message?: StringFilter<"ContactsMessage"> | string
    userId?: IntFilter<"ContactsMessage"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ContactsMessageOrderByWithRelationInput = {
    id?: SortOrder
    message?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ContactsMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ContactsMessageWhereInput | ContactsMessageWhereInput[]
    OR?: ContactsMessageWhereInput[]
    NOT?: ContactsMessageWhereInput | ContactsMessageWhereInput[]
    message?: StringFilter<"ContactsMessage"> | string
    userId?: IntFilter<"ContactsMessage"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "id">

  export type ContactsMessageOrderByWithAggregationInput = {
    id?: SortOrder
    message?: SortOrder
    userId?: SortOrder
    _count?: ContactsMessageCountOrderByAggregateInput
    _avg?: ContactsMessageAvgOrderByAggregateInput
    _max?: ContactsMessageMaxOrderByAggregateInput
    _min?: ContactsMessageMinOrderByAggregateInput
    _sum?: ContactsMessageSumOrderByAggregateInput
  }

  export type ContactsMessageScalarWhereWithAggregatesInput = {
    AND?: ContactsMessageScalarWhereWithAggregatesInput | ContactsMessageScalarWhereWithAggregatesInput[]
    OR?: ContactsMessageScalarWhereWithAggregatesInput[]
    NOT?: ContactsMessageScalarWhereWithAggregatesInput | ContactsMessageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ContactsMessage"> | number
    message?: StringWithAggregatesFilter<"ContactsMessage"> | string
    userId?: IntWithAggregatesFilter<"ContactsMessage"> | number
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: IntFilter<"Product"> | number
    title?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    color?: StringFilter<"Product"> | string
    price?: IntFilter<"Product"> | number
    discount?: IntNullableFilter<"Product"> | number | null
    img?: StringFilter<"Product"> | string
    creationDate?: DateTimeFilter<"Product"> | Date | string
    productDescription?: ProductDescriptionListRelationFilter
    orderProduct?: OrderProductListRelationFilter
    category?: CategoryListRelationFilter
    cartsProduct?: CartsProductListRelationFilter
    ProductCharacteristic?: ProductCharacteristicListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    color?: SortOrder
    price?: SortOrder
    discount?: SortOrderInput | SortOrder
    img?: SortOrder
    creationDate?: SortOrder
    productDescription?: ProductDescriptionOrderByRelationAggregateInput
    orderProduct?: OrderProductOrderByRelationAggregateInput
    category?: CategoryOrderByRelationAggregateInput
    cartsProduct?: CartsProductOrderByRelationAggregateInput
    ProductCharacteristic?: ProductCharacteristicOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    title?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    color?: StringFilter<"Product"> | string
    price?: IntFilter<"Product"> | number
    discount?: IntNullableFilter<"Product"> | number | null
    img?: StringFilter<"Product"> | string
    creationDate?: DateTimeFilter<"Product"> | Date | string
    productDescription?: ProductDescriptionListRelationFilter
    orderProduct?: OrderProductListRelationFilter
    category?: CategoryListRelationFilter
    cartsProduct?: CartsProductListRelationFilter
    ProductCharacteristic?: ProductCharacteristicListRelationFilter
  }, "id" | "id">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    color?: SortOrder
    price?: SortOrder
    discount?: SortOrderInput | SortOrder
    img?: SortOrder
    creationDate?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Product"> | number
    title?: StringWithAggregatesFilter<"Product"> | string
    description?: StringWithAggregatesFilter<"Product"> | string
    color?: StringWithAggregatesFilter<"Product"> | string
    price?: IntWithAggregatesFilter<"Product"> | number
    discount?: IntNullableWithAggregatesFilter<"Product"> | number | null
    img?: StringWithAggregatesFilter<"Product"> | string
    creationDate?: DateTimeWithAggregatesFilter<"Product"> | Date | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: IntFilter<"Category"> | number
    name?: StringFilter<"Category"> | string
    product?: ProductListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    product?: ProductOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    name?: StringFilter<"Category"> | string
    product?: ProductListRelationFilter
  }, "id" | "id">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Category"> | number
    name?: StringWithAggregatesFilter<"Category"> | string
  }

  export type CartsProductWhereInput = {
    AND?: CartsProductWhereInput | CartsProductWhereInput[]
    OR?: CartsProductWhereInput[]
    NOT?: CartsProductWhereInput | CartsProductWhereInput[]
    id?: IntFilter<"CartsProduct"> | number
    amout?: IntFilter<"CartsProduct"> | number
    userId?: IntFilter<"CartsProduct"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    product?: ProductListRelationFilter
  }

  export type CartsProductOrderByWithRelationInput = {
    id?: SortOrder
    amout?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    product?: ProductOrderByRelationAggregateInput
  }

  export type CartsProductWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: CartsProductWhereInput | CartsProductWhereInput[]
    OR?: CartsProductWhereInput[]
    NOT?: CartsProductWhereInput | CartsProductWhereInput[]
    amout?: IntFilter<"CartsProduct"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    product?: ProductListRelationFilter
  }, "id" | "id" | "userId">

  export type CartsProductOrderByWithAggregationInput = {
    id?: SortOrder
    amout?: SortOrder
    userId?: SortOrder
    _count?: CartsProductCountOrderByAggregateInput
    _avg?: CartsProductAvgOrderByAggregateInput
    _max?: CartsProductMaxOrderByAggregateInput
    _min?: CartsProductMinOrderByAggregateInput
    _sum?: CartsProductSumOrderByAggregateInput
  }

  export type CartsProductScalarWhereWithAggregatesInput = {
    AND?: CartsProductScalarWhereWithAggregatesInput | CartsProductScalarWhereWithAggregatesInput[]
    OR?: CartsProductScalarWhereWithAggregatesInput[]
    NOT?: CartsProductScalarWhereWithAggregatesInput | CartsProductScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CartsProduct"> | number
    amout?: IntWithAggregatesFilter<"CartsProduct"> | number
    userId?: IntWithAggregatesFilter<"CartsProduct"> | number
  }

  export type ProductDescriptionWhereInput = {
    AND?: ProductDescriptionWhereInput | ProductDescriptionWhereInput[]
    OR?: ProductDescriptionWhereInput[]
    NOT?: ProductDescriptionWhereInput | ProductDescriptionWhereInput[]
    id?: IntFilter<"ProductDescription"> | number
    title?: StringFilter<"ProductDescription"> | string
    description?: StringFilter<"ProductDescription"> | string
    img?: StringFilter<"ProductDescription"> | string
    productId?: IntFilter<"ProductDescription"> | number
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type ProductDescriptionOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    img?: SortOrder
    productId?: SortOrder
    product?: ProductOrderByWithRelationInput
  }

  export type ProductDescriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProductDescriptionWhereInput | ProductDescriptionWhereInput[]
    OR?: ProductDescriptionWhereInput[]
    NOT?: ProductDescriptionWhereInput | ProductDescriptionWhereInput[]
    title?: StringFilter<"ProductDescription"> | string
    description?: StringFilter<"ProductDescription"> | string
    img?: StringFilter<"ProductDescription"> | string
    productId?: IntFilter<"ProductDescription"> | number
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id" | "id">

  export type ProductDescriptionOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    img?: SortOrder
    productId?: SortOrder
    _count?: ProductDescriptionCountOrderByAggregateInput
    _avg?: ProductDescriptionAvgOrderByAggregateInput
    _max?: ProductDescriptionMaxOrderByAggregateInput
    _min?: ProductDescriptionMinOrderByAggregateInput
    _sum?: ProductDescriptionSumOrderByAggregateInput
  }

  export type ProductDescriptionScalarWhereWithAggregatesInput = {
    AND?: ProductDescriptionScalarWhereWithAggregatesInput | ProductDescriptionScalarWhereWithAggregatesInput[]
    OR?: ProductDescriptionScalarWhereWithAggregatesInput[]
    NOT?: ProductDescriptionScalarWhereWithAggregatesInput | ProductDescriptionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProductDescription"> | number
    title?: StringWithAggregatesFilter<"ProductDescription"> | string
    description?: StringWithAggregatesFilter<"ProductDescription"> | string
    img?: StringWithAggregatesFilter<"ProductDescription"> | string
    productId?: IntWithAggregatesFilter<"ProductDescription"> | number
  }

  export type ProductCharacteristicWhereInput = {
    AND?: ProductCharacteristicWhereInput | ProductCharacteristicWhereInput[]
    OR?: ProductCharacteristicWhereInput[]
    NOT?: ProductCharacteristicWhereInput | ProductCharacteristicWhereInput[]
    id?: IntFilter<"ProductCharacteristic"> | number
    title?: StringFilter<"ProductCharacteristic"> | string
    description?: StringFilter<"ProductCharacteristic"> | string
    img?: StringFilter<"ProductCharacteristic"> | string
    coding?: StringFilter<"ProductCharacteristic"> | string
    ufsStorage?: IntFilter<"ProductCharacteristic"> | number
    eMMSStorage?: IntFilter<"ProductCharacteristic"> | number
    productId?: IntFilter<"ProductCharacteristic"> | number
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type ProductCharacteristicOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    img?: SortOrder
    coding?: SortOrder
    ufsStorage?: SortOrder
    eMMSStorage?: SortOrder
    productId?: SortOrder
    product?: ProductOrderByWithRelationInput
  }

  export type ProductCharacteristicWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProductCharacteristicWhereInput | ProductCharacteristicWhereInput[]
    OR?: ProductCharacteristicWhereInput[]
    NOT?: ProductCharacteristicWhereInput | ProductCharacteristicWhereInput[]
    title?: StringFilter<"ProductCharacteristic"> | string
    description?: StringFilter<"ProductCharacteristic"> | string
    img?: StringFilter<"ProductCharacteristic"> | string
    coding?: StringFilter<"ProductCharacteristic"> | string
    ufsStorage?: IntFilter<"ProductCharacteristic"> | number
    eMMSStorage?: IntFilter<"ProductCharacteristic"> | number
    productId?: IntFilter<"ProductCharacteristic"> | number
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id" | "id">

  export type ProductCharacteristicOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    img?: SortOrder
    coding?: SortOrder
    ufsStorage?: SortOrder
    eMMSStorage?: SortOrder
    productId?: SortOrder
    _count?: ProductCharacteristicCountOrderByAggregateInput
    _avg?: ProductCharacteristicAvgOrderByAggregateInput
    _max?: ProductCharacteristicMaxOrderByAggregateInput
    _min?: ProductCharacteristicMinOrderByAggregateInput
    _sum?: ProductCharacteristicSumOrderByAggregateInput
  }

  export type ProductCharacteristicScalarWhereWithAggregatesInput = {
    AND?: ProductCharacteristicScalarWhereWithAggregatesInput | ProductCharacteristicScalarWhereWithAggregatesInput[]
    OR?: ProductCharacteristicScalarWhereWithAggregatesInput[]
    NOT?: ProductCharacteristicScalarWhereWithAggregatesInput | ProductCharacteristicScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProductCharacteristic"> | number
    title?: StringWithAggregatesFilter<"ProductCharacteristic"> | string
    description?: StringWithAggregatesFilter<"ProductCharacteristic"> | string
    img?: StringWithAggregatesFilter<"ProductCharacteristic"> | string
    coding?: StringWithAggregatesFilter<"ProductCharacteristic"> | string
    ufsStorage?: IntWithAggregatesFilter<"ProductCharacteristic"> | number
    eMMSStorage?: IntWithAggregatesFilter<"ProductCharacteristic"> | number
    productId?: IntWithAggregatesFilter<"ProductCharacteristic"> | number
  }

  export type GmailCodeWhereInput = {
    AND?: GmailCodeWhereInput | GmailCodeWhereInput[]
    OR?: GmailCodeWhereInput[]
    NOT?: GmailCodeWhereInput | GmailCodeWhereInput[]
    id?: IntFilter<"GmailCode"> | number
    code?: IntFilter<"GmailCode"> | number
  }

  export type GmailCodeOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
  }

  export type GmailCodeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    code?: number
    AND?: GmailCodeWhereInput | GmailCodeWhereInput[]
    OR?: GmailCodeWhereInput[]
    NOT?: GmailCodeWhereInput | GmailCodeWhereInput[]
  }, "id" | "id" | "code">

  export type GmailCodeOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    _count?: GmailCodeCountOrderByAggregateInput
    _avg?: GmailCodeAvgOrderByAggregateInput
    _max?: GmailCodeMaxOrderByAggregateInput
    _min?: GmailCodeMinOrderByAggregateInput
    _sum?: GmailCodeSumOrderByAggregateInput
  }

  export type GmailCodeScalarWhereWithAggregatesInput = {
    AND?: GmailCodeScalarWhereWithAggregatesInput | GmailCodeScalarWhereWithAggregatesInput[]
    OR?: GmailCodeScalarWhereWithAggregatesInput[]
    NOT?: GmailCodeScalarWhereWithAggregatesInput | GmailCodeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"GmailCode"> | number
    code?: IntWithAggregatesFilter<"GmailCode"> | number
  }

  export type UserCreateInput = {
    username: string
    email: string
    password: string
    isAdmin: boolean
    name?: string | null
    surname?: string | null
    middleName?: string | null
    birthday?: string | null
    phoneNumber?: string | null
    contactsMessages?: ContactsMessageCreateNestedManyWithoutUserInput
    userInfo?: UserInfoCreateNestedOneWithoutUserInput
    userOrderComment?: UserOrderCommentCreateNestedManyWithoutUserInput
    userAdress?: AdressCreateNestedManyWithoutUserInput
    order?: OrderCreateNestedManyWithoutUserInput
    cartsProduct?: CartsProductCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    username: string
    email: string
    password: string
    isAdmin: boolean
    name?: string | null
    surname?: string | null
    middleName?: string | null
    birthday?: string | null
    phoneNumber?: string | null
    contactsMessages?: ContactsMessageUncheckedCreateNestedManyWithoutUserInput
    userInfo?: UserInfoUncheckedCreateNestedOneWithoutUserInput
    userOrderComment?: UserOrderCommentUncheckedCreateNestedManyWithoutUserInput
    userAdress?: AdressUncheckedCreateNestedManyWithoutUserInput
    order?: OrderUncheckedCreateNestedManyWithoutUserInput
    cartsProduct?: CartsProductUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    contactsMessages?: ContactsMessageUpdateManyWithoutUserNestedInput
    userInfo?: UserInfoUpdateOneWithoutUserNestedInput
    userOrderComment?: UserOrderCommentUpdateManyWithoutUserNestedInput
    userAdress?: AdressUpdateManyWithoutUserNestedInput
    order?: OrderUpdateManyWithoutUserNestedInput
    cartsProduct?: CartsProductUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    contactsMessages?: ContactsMessageUncheckedUpdateManyWithoutUserNestedInput
    userInfo?: UserInfoUncheckedUpdateOneWithoutUserNestedInput
    userOrderComment?: UserOrderCommentUncheckedUpdateManyWithoutUserNestedInput
    userAdress?: AdressUncheckedUpdateManyWithoutUserNestedInput
    order?: OrderUncheckedUpdateManyWithoutUserNestedInput
    cartsProduct?: CartsProductUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    username: string
    email: string
    password: string
    isAdmin: boolean
    name?: string | null
    surname?: string | null
    middleName?: string | null
    birthday?: string | null
    phoneNumber?: string | null
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AdressCreateInput = {
    postDepartament: string
    street: string
    home: string
    appartament: number
    entrants: number
    user?: UserCreateNestedOneWithoutUserAdressInput
    order?: OrderCreateNestedManyWithoutUserAdressInput
  }

  export type AdressUncheckedCreateInput = {
    id?: number
    postDepartament: string
    street: string
    home: string
    appartament: number
    entrants: number
    userId: number
    order?: OrderUncheckedCreateNestedManyWithoutUserAdressInput
  }

  export type AdressUpdateInput = {
    postDepartament?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    home?: StringFieldUpdateOperationsInput | string
    appartament?: IntFieldUpdateOperationsInput | number
    entrants?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneWithoutUserAdressNestedInput
    order?: OrderUpdateManyWithoutUserAdressNestedInput
  }

  export type AdressUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    postDepartament?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    home?: StringFieldUpdateOperationsInput | string
    appartament?: IntFieldUpdateOperationsInput | number
    entrants?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    order?: OrderUncheckedUpdateManyWithoutUserAdressNestedInput
  }

  export type AdressCreateManyInput = {
    id?: number
    postDepartament: string
    street: string
    home: string
    appartament: number
    entrants: number
    userId: number
  }

  export type AdressUpdateManyMutationInput = {
    postDepartament?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    home?: StringFieldUpdateOperationsInput | string
    appartament?: IntFieldUpdateOperationsInput | number
    entrants?: IntFieldUpdateOperationsInput | number
  }

  export type AdressUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    postDepartament?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    home?: StringFieldUpdateOperationsInput | string
    appartament?: IntFieldUpdateOperationsInput | number
    entrants?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type UserInfoCreateInput = {
    name: string
    surname: string
    middleName: string
    birthday: Date | string
    phoneNumber: number
    user: UserCreateNestedOneWithoutUserInfoInput
  }

  export type UserInfoUncheckedCreateInput = {
    id?: number
    name: string
    surname: string
    middleName: string
    birthday: Date | string
    phoneNumber: number
    userId: number
  }

  export type UserInfoUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    middleName?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    phoneNumber?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutUserInfoNestedInput
  }

  export type UserInfoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    middleName?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    phoneNumber?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type UserInfoCreateManyInput = {
    id?: number
    name: string
    surname: string
    middleName: string
    birthday: Date | string
    phoneNumber: number
    userId: number
  }

  export type UserInfoUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    middleName?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    phoneNumber?: IntFieldUpdateOperationsInput | number
  }

  export type UserInfoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    middleName?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    phoneNumber?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type OrderCreateInput = {
    totalPrice: number
    status: string
    createdAt: string
    user: UserCreateNestedOneWithoutOrderInput
    userAdress?: AdressCreateNestedOneWithoutOrderInput
  }

  export type OrderUncheckedCreateInput = {
    id?: number
    totalPrice: number
    status: string
    createdAt: string
    userId: number
    userAdressId: number
  }

  export type OrderUpdateInput = {
    totalPrice?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutOrderNestedInput
    userAdress?: AdressUpdateOneWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    userAdressId?: IntFieldUpdateOperationsInput | number
  }

  export type OrderCreateManyInput = {
    id?: number
    totalPrice: number
    status: string
    createdAt: string
    userId: number
    userAdressId: number
  }

  export type OrderUpdateManyMutationInput = {
    totalPrice?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: StringFieldUpdateOperationsInput | string
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    userAdressId?: IntFieldUpdateOperationsInput | number
  }

  export type OrderProductCreateInput = {
    amount: number
    priceInPurchase: number
    product: ProductCreateNestedOneWithoutOrderProductInput
  }

  export type OrderProductUncheckedCreateInput = {
    id?: number
    amount: number
    priceInPurchase: number
    productId: number
  }

  export type OrderProductUpdateInput = {
    amount?: IntFieldUpdateOperationsInput | number
    priceInPurchase?: IntFieldUpdateOperationsInput | number
    product?: ProductUpdateOneRequiredWithoutOrderProductNestedInput
  }

  export type OrderProductUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    priceInPurchase?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type OrderProductCreateManyInput = {
    id?: number
    amount: number
    priceInPurchase: number
    productId: number
  }

  export type OrderProductUpdateManyMutationInput = {
    amount?: IntFieldUpdateOperationsInput | number
    priceInPurchase?: IntFieldUpdateOperationsInput | number
  }

  export type OrderProductUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    priceInPurchase?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type UserOrderCommentCreateInput = {
    comment: string
    user: UserCreateNestedOneWithoutUserOrderCommentInput
  }

  export type UserOrderCommentUncheckedCreateInput = {
    id?: number
    comment: string
    userId: number
  }

  export type UserOrderCommentUpdateInput = {
    comment?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutUserOrderCommentNestedInput
  }

  export type UserOrderCommentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type UserOrderCommentCreateManyInput = {
    id?: number
    comment: string
    userId: number
  }

  export type UserOrderCommentUpdateManyMutationInput = {
    comment?: StringFieldUpdateOperationsInput | string
  }

  export type UserOrderCommentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ContactsMessageCreateInput = {
    message: string
    user: UserCreateNestedOneWithoutContactsMessagesInput
  }

  export type ContactsMessageUncheckedCreateInput = {
    id?: number
    message: string
    userId: number
  }

  export type ContactsMessageUpdateInput = {
    message?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutContactsMessagesNestedInput
  }

  export type ContactsMessageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ContactsMessageCreateManyInput = {
    id?: number
    message: string
    userId: number
  }

  export type ContactsMessageUpdateManyMutationInput = {
    message?: StringFieldUpdateOperationsInput | string
  }

  export type ContactsMessageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductCreateInput = {
    title: string
    description: string
    color: string
    price: number
    discount?: number | null
    img: string
    creationDate?: Date | string
    productDescription?: ProductDescriptionCreateNestedManyWithoutProductInput
    orderProduct?: OrderProductCreateNestedManyWithoutProductInput
    category?: CategoryCreateNestedManyWithoutProductInput
    cartsProduct?: CartsProductCreateNestedManyWithoutProductInput
    ProductCharacteristic?: ProductCharacteristicCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: number
    title: string
    description: string
    color: string
    price: number
    discount?: number | null
    img: string
    creationDate?: Date | string
    productDescription?: ProductDescriptionUncheckedCreateNestedManyWithoutProductInput
    orderProduct?: OrderProductUncheckedCreateNestedManyWithoutProductInput
    category?: CategoryUncheckedCreateNestedManyWithoutProductInput
    cartsProduct?: CartsProductUncheckedCreateNestedManyWithoutProductInput
    ProductCharacteristic?: ProductCharacteristicUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    discount?: NullableIntFieldUpdateOperationsInput | number | null
    img?: StringFieldUpdateOperationsInput | string
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    productDescription?: ProductDescriptionUpdateManyWithoutProductNestedInput
    orderProduct?: OrderProductUpdateManyWithoutProductNestedInput
    category?: CategoryUpdateManyWithoutProductNestedInput
    cartsProduct?: CartsProductUpdateManyWithoutProductNestedInput
    ProductCharacteristic?: ProductCharacteristicUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    discount?: NullableIntFieldUpdateOperationsInput | number | null
    img?: StringFieldUpdateOperationsInput | string
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    productDescription?: ProductDescriptionUncheckedUpdateManyWithoutProductNestedInput
    orderProduct?: OrderProductUncheckedUpdateManyWithoutProductNestedInput
    category?: CategoryUncheckedUpdateManyWithoutProductNestedInput
    cartsProduct?: CartsProductUncheckedUpdateManyWithoutProductNestedInput
    ProductCharacteristic?: ProductCharacteristicUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: number
    title: string
    description: string
    color: string
    price: number
    discount?: number | null
    img: string
    creationDate?: Date | string
  }

  export type ProductUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    discount?: NullableIntFieldUpdateOperationsInput | number | null
    img?: StringFieldUpdateOperationsInput | string
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    discount?: NullableIntFieldUpdateOperationsInput | number | null
    img?: StringFieldUpdateOperationsInput | string
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateInput = {
    name: string
    product?: ProductCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: number
    name: string
    product?: ProductUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    product?: ProductUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    product?: ProductUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: number
    name: string
  }

  export type CategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CartsProductCreateInput = {
    amout: number
    user: UserCreateNestedOneWithoutCartsProductInput
    product?: ProductCreateNestedManyWithoutCartsProductInput
  }

  export type CartsProductUncheckedCreateInput = {
    id?: number
    amout: number
    userId: number
    product?: ProductUncheckedCreateNestedManyWithoutCartsProductInput
  }

  export type CartsProductUpdateInput = {
    amout?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutCartsProductNestedInput
    product?: ProductUpdateManyWithoutCartsProductNestedInput
  }

  export type CartsProductUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    amout?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    product?: ProductUncheckedUpdateManyWithoutCartsProductNestedInput
  }

  export type CartsProductCreateManyInput = {
    id?: number
    amout: number
    userId: number
  }

  export type CartsProductUpdateManyMutationInput = {
    amout?: IntFieldUpdateOperationsInput | number
  }

  export type CartsProductUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    amout?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductDescriptionCreateInput = {
    title: string
    description: string
    img: string
    product: ProductCreateNestedOneWithoutProductDescriptionInput
  }

  export type ProductDescriptionUncheckedCreateInput = {
    id?: number
    title: string
    description: string
    img: string
    productId: number
  }

  export type ProductDescriptionUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    product?: ProductUpdateOneRequiredWithoutProductDescriptionNestedInput
  }

  export type ProductDescriptionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductDescriptionCreateManyInput = {
    id?: number
    title: string
    description: string
    img: string
    productId: number
  }

  export type ProductDescriptionUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
  }

  export type ProductDescriptionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductCharacteristicCreateInput = {
    title: string
    description: string
    img: string
    coding: string
    ufsStorage: number
    eMMSStorage: number
    product: ProductCreateNestedOneWithoutProductCharacteristicInput
  }

  export type ProductCharacteristicUncheckedCreateInput = {
    id?: number
    title: string
    description: string
    img: string
    coding: string
    ufsStorage: number
    eMMSStorage: number
    productId: number
  }

  export type ProductCharacteristicUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    coding?: StringFieldUpdateOperationsInput | string
    ufsStorage?: IntFieldUpdateOperationsInput | number
    eMMSStorage?: IntFieldUpdateOperationsInput | number
    product?: ProductUpdateOneRequiredWithoutProductCharacteristicNestedInput
  }

  export type ProductCharacteristicUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    coding?: StringFieldUpdateOperationsInput | string
    ufsStorage?: IntFieldUpdateOperationsInput | number
    eMMSStorage?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductCharacteristicCreateManyInput = {
    id?: number
    title: string
    description: string
    img: string
    coding: string
    ufsStorage: number
    eMMSStorage: number
    productId: number
  }

  export type ProductCharacteristicUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    coding?: StringFieldUpdateOperationsInput | string
    ufsStorage?: IntFieldUpdateOperationsInput | number
    eMMSStorage?: IntFieldUpdateOperationsInput | number
  }

  export type ProductCharacteristicUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    coding?: StringFieldUpdateOperationsInput | string
    ufsStorage?: IntFieldUpdateOperationsInput | number
    eMMSStorage?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type GmailCodeCreateInput = {
    code: number
  }

  export type GmailCodeUncheckedCreateInput = {
    id?: number
    code: number
  }

  export type GmailCodeUpdateInput = {
    code?: IntFieldUpdateOperationsInput | number
  }

  export type GmailCodeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: IntFieldUpdateOperationsInput | number
  }

  export type GmailCodeCreateManyInput = {
    id?: number
    code: number
  }

  export type GmailCodeUpdateManyMutationInput = {
    code?: IntFieldUpdateOperationsInput | number
  }

  export type GmailCodeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ContactsMessageListRelationFilter = {
    every?: ContactsMessageWhereInput
    some?: ContactsMessageWhereInput
    none?: ContactsMessageWhereInput
  }

  export type UserInfoNullableScalarRelationFilter = {
    is?: UserInfoWhereInput | null
    isNot?: UserInfoWhereInput | null
  }

  export type UserOrderCommentListRelationFilter = {
    every?: UserOrderCommentWhereInput
    some?: UserOrderCommentWhereInput
    none?: UserOrderCommentWhereInput
  }

  export type AdressListRelationFilter = {
    every?: AdressWhereInput
    some?: AdressWhereInput
    none?: AdressWhereInput
  }

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type CartsProductNullableScalarRelationFilter = {
    is?: CartsProductWhereInput | null
    isNot?: CartsProductWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ContactsMessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderCommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AdressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isAdmin?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    middleName?: SortOrder
    birthday?: SortOrder
    phoneNumber?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isAdmin?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    middleName?: SortOrder
    birthday?: SortOrder
    phoneNumber?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isAdmin?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    middleName?: SortOrder
    birthday?: SortOrder
    phoneNumber?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type AdressCountOrderByAggregateInput = {
    id?: SortOrder
    postDepartament?: SortOrder
    street?: SortOrder
    home?: SortOrder
    appartament?: SortOrder
    entrants?: SortOrder
    userId?: SortOrder
  }

  export type AdressAvgOrderByAggregateInput = {
    id?: SortOrder
    appartament?: SortOrder
    entrants?: SortOrder
    userId?: SortOrder
  }

  export type AdressMaxOrderByAggregateInput = {
    id?: SortOrder
    postDepartament?: SortOrder
    street?: SortOrder
    home?: SortOrder
    appartament?: SortOrder
    entrants?: SortOrder
    userId?: SortOrder
  }

  export type AdressMinOrderByAggregateInput = {
    id?: SortOrder
    postDepartament?: SortOrder
    street?: SortOrder
    home?: SortOrder
    appartament?: SortOrder
    entrants?: SortOrder
    userId?: SortOrder
  }

  export type AdressSumOrderByAggregateInput = {
    id?: SortOrder
    appartament?: SortOrder
    entrants?: SortOrder
    userId?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserInfoCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    middleName?: SortOrder
    birthday?: SortOrder
    phoneNumber?: SortOrder
    userId?: SortOrder
  }

  export type UserInfoAvgOrderByAggregateInput = {
    id?: SortOrder
    phoneNumber?: SortOrder
    userId?: SortOrder
  }

  export type UserInfoMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    middleName?: SortOrder
    birthday?: SortOrder
    phoneNumber?: SortOrder
    userId?: SortOrder
  }

  export type UserInfoMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    middleName?: SortOrder
    birthday?: SortOrder
    phoneNumber?: SortOrder
    userId?: SortOrder
  }

  export type UserInfoSumOrderByAggregateInput = {
    id?: SortOrder
    phoneNumber?: SortOrder
    userId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type AdressNullableScalarRelationFilter = {
    is?: AdressWhereInput | null
    isNot?: AdressWhereInput | null
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    totalPrice?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    userAdressId?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    id?: SortOrder
    totalPrice?: SortOrder
    userId?: SortOrder
    userAdressId?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    totalPrice?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    userAdressId?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    totalPrice?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    userAdressId?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    id?: SortOrder
    totalPrice?: SortOrder
    userId?: SortOrder
    userAdressId?: SortOrder
  }

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type OrderProductCountOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    priceInPurchase?: SortOrder
    productId?: SortOrder
  }

  export type OrderProductAvgOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    priceInPurchase?: SortOrder
    productId?: SortOrder
  }

  export type OrderProductMaxOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    priceInPurchase?: SortOrder
    productId?: SortOrder
  }

  export type OrderProductMinOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    priceInPurchase?: SortOrder
    productId?: SortOrder
  }

  export type OrderProductSumOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    priceInPurchase?: SortOrder
    productId?: SortOrder
  }

  export type UserOrderCommentCountOrderByAggregateInput = {
    id?: SortOrder
    comment?: SortOrder
    userId?: SortOrder
  }

  export type UserOrderCommentAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type UserOrderCommentMaxOrderByAggregateInput = {
    id?: SortOrder
    comment?: SortOrder
    userId?: SortOrder
  }

  export type UserOrderCommentMinOrderByAggregateInput = {
    id?: SortOrder
    comment?: SortOrder
    userId?: SortOrder
  }

  export type UserOrderCommentSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type ContactsMessageCountOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    userId?: SortOrder
  }

  export type ContactsMessageAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type ContactsMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    userId?: SortOrder
  }

  export type ContactsMessageMinOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    userId?: SortOrder
  }

  export type ContactsMessageSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ProductDescriptionListRelationFilter = {
    every?: ProductDescriptionWhereInput
    some?: ProductDescriptionWhereInput
    none?: ProductDescriptionWhereInput
  }

  export type OrderProductListRelationFilter = {
    every?: OrderProductWhereInput
    some?: OrderProductWhereInput
    none?: OrderProductWhereInput
  }

  export type CategoryListRelationFilter = {
    every?: CategoryWhereInput
    some?: CategoryWhereInput
    none?: CategoryWhereInput
  }

  export type CartsProductListRelationFilter = {
    every?: CartsProductWhereInput
    some?: CartsProductWhereInput
    none?: CartsProductWhereInput
  }

  export type ProductCharacteristicListRelationFilter = {
    every?: ProductCharacteristicWhereInput
    some?: ProductCharacteristicWhereInput
    none?: ProductCharacteristicWhereInput
  }

  export type ProductDescriptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CartsProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCharacteristicOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    color?: SortOrder
    price?: SortOrder
    discount?: SortOrder
    img?: SortOrder
    creationDate?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    discount?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    color?: SortOrder
    price?: SortOrder
    discount?: SortOrder
    img?: SortOrder
    creationDate?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    color?: SortOrder
    price?: SortOrder
    discount?: SortOrder
    img?: SortOrder
    creationDate?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    discount?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CartsProductCountOrderByAggregateInput = {
    id?: SortOrder
    amout?: SortOrder
    userId?: SortOrder
  }

  export type CartsProductAvgOrderByAggregateInput = {
    id?: SortOrder
    amout?: SortOrder
    userId?: SortOrder
  }

  export type CartsProductMaxOrderByAggregateInput = {
    id?: SortOrder
    amout?: SortOrder
    userId?: SortOrder
  }

  export type CartsProductMinOrderByAggregateInput = {
    id?: SortOrder
    amout?: SortOrder
    userId?: SortOrder
  }

  export type CartsProductSumOrderByAggregateInput = {
    id?: SortOrder
    amout?: SortOrder
    userId?: SortOrder
  }

  export type ProductDescriptionCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    img?: SortOrder
    productId?: SortOrder
  }

  export type ProductDescriptionAvgOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
  }

  export type ProductDescriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    img?: SortOrder
    productId?: SortOrder
  }

  export type ProductDescriptionMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    img?: SortOrder
    productId?: SortOrder
  }

  export type ProductDescriptionSumOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
  }

  export type ProductCharacteristicCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    img?: SortOrder
    coding?: SortOrder
    ufsStorage?: SortOrder
    eMMSStorage?: SortOrder
    productId?: SortOrder
  }

  export type ProductCharacteristicAvgOrderByAggregateInput = {
    id?: SortOrder
    ufsStorage?: SortOrder
    eMMSStorage?: SortOrder
    productId?: SortOrder
  }

  export type ProductCharacteristicMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    img?: SortOrder
    coding?: SortOrder
    ufsStorage?: SortOrder
    eMMSStorage?: SortOrder
    productId?: SortOrder
  }

  export type ProductCharacteristicMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    img?: SortOrder
    coding?: SortOrder
    ufsStorage?: SortOrder
    eMMSStorage?: SortOrder
    productId?: SortOrder
  }

  export type ProductCharacteristicSumOrderByAggregateInput = {
    id?: SortOrder
    ufsStorage?: SortOrder
    eMMSStorage?: SortOrder
    productId?: SortOrder
  }

  export type GmailCodeCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
  }

  export type GmailCodeAvgOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
  }

  export type GmailCodeMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
  }

  export type GmailCodeMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
  }

  export type GmailCodeSumOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
  }

  export type ContactsMessageCreateNestedManyWithoutUserInput = {
    create?: XOR<ContactsMessageCreateWithoutUserInput, ContactsMessageUncheckedCreateWithoutUserInput> | ContactsMessageCreateWithoutUserInput[] | ContactsMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContactsMessageCreateOrConnectWithoutUserInput | ContactsMessageCreateOrConnectWithoutUserInput[]
    createMany?: ContactsMessageCreateManyUserInputEnvelope
    connect?: ContactsMessageWhereUniqueInput | ContactsMessageWhereUniqueInput[]
  }

  export type UserInfoCreateNestedOneWithoutUserInput = {
    create?: XOR<UserInfoCreateWithoutUserInput, UserInfoUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserInfoCreateOrConnectWithoutUserInput
    connect?: UserInfoWhereUniqueInput
  }

  export type UserOrderCommentCreateNestedManyWithoutUserInput = {
    create?: XOR<UserOrderCommentCreateWithoutUserInput, UserOrderCommentUncheckedCreateWithoutUserInput> | UserOrderCommentCreateWithoutUserInput[] | UserOrderCommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserOrderCommentCreateOrConnectWithoutUserInput | UserOrderCommentCreateOrConnectWithoutUserInput[]
    createMany?: UserOrderCommentCreateManyUserInputEnvelope
    connect?: UserOrderCommentWhereUniqueInput | UserOrderCommentWhereUniqueInput[]
  }

  export type AdressCreateNestedManyWithoutUserInput = {
    create?: XOR<AdressCreateWithoutUserInput, AdressUncheckedCreateWithoutUserInput> | AdressCreateWithoutUserInput[] | AdressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AdressCreateOrConnectWithoutUserInput | AdressCreateOrConnectWithoutUserInput[]
    createMany?: AdressCreateManyUserInputEnvelope
    connect?: AdressWhereUniqueInput | AdressWhereUniqueInput[]
  }

  export type OrderCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type CartsProductCreateNestedOneWithoutUserInput = {
    create?: XOR<CartsProductCreateWithoutUserInput, CartsProductUncheckedCreateWithoutUserInput>
    connectOrCreate?: CartsProductCreateOrConnectWithoutUserInput
    connect?: CartsProductWhereUniqueInput
  }

  export type ContactsMessageUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ContactsMessageCreateWithoutUserInput, ContactsMessageUncheckedCreateWithoutUserInput> | ContactsMessageCreateWithoutUserInput[] | ContactsMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContactsMessageCreateOrConnectWithoutUserInput | ContactsMessageCreateOrConnectWithoutUserInput[]
    createMany?: ContactsMessageCreateManyUserInputEnvelope
    connect?: ContactsMessageWhereUniqueInput | ContactsMessageWhereUniqueInput[]
  }

  export type UserInfoUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UserInfoCreateWithoutUserInput, UserInfoUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserInfoCreateOrConnectWithoutUserInput
    connect?: UserInfoWhereUniqueInput
  }

  export type UserOrderCommentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserOrderCommentCreateWithoutUserInput, UserOrderCommentUncheckedCreateWithoutUserInput> | UserOrderCommentCreateWithoutUserInput[] | UserOrderCommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserOrderCommentCreateOrConnectWithoutUserInput | UserOrderCommentCreateOrConnectWithoutUserInput[]
    createMany?: UserOrderCommentCreateManyUserInputEnvelope
    connect?: UserOrderCommentWhereUniqueInput | UserOrderCommentWhereUniqueInput[]
  }

  export type AdressUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AdressCreateWithoutUserInput, AdressUncheckedCreateWithoutUserInput> | AdressCreateWithoutUserInput[] | AdressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AdressCreateOrConnectWithoutUserInput | AdressCreateOrConnectWithoutUserInput[]
    createMany?: AdressCreateManyUserInputEnvelope
    connect?: AdressWhereUniqueInput | AdressWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type CartsProductUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<CartsProductCreateWithoutUserInput, CartsProductUncheckedCreateWithoutUserInput>
    connectOrCreate?: CartsProductCreateOrConnectWithoutUserInput
    connect?: CartsProductWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ContactsMessageUpdateManyWithoutUserNestedInput = {
    create?: XOR<ContactsMessageCreateWithoutUserInput, ContactsMessageUncheckedCreateWithoutUserInput> | ContactsMessageCreateWithoutUserInput[] | ContactsMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContactsMessageCreateOrConnectWithoutUserInput | ContactsMessageCreateOrConnectWithoutUserInput[]
    upsert?: ContactsMessageUpsertWithWhereUniqueWithoutUserInput | ContactsMessageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ContactsMessageCreateManyUserInputEnvelope
    set?: ContactsMessageWhereUniqueInput | ContactsMessageWhereUniqueInput[]
    disconnect?: ContactsMessageWhereUniqueInput | ContactsMessageWhereUniqueInput[]
    delete?: ContactsMessageWhereUniqueInput | ContactsMessageWhereUniqueInput[]
    connect?: ContactsMessageWhereUniqueInput | ContactsMessageWhereUniqueInput[]
    update?: ContactsMessageUpdateWithWhereUniqueWithoutUserInput | ContactsMessageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ContactsMessageUpdateManyWithWhereWithoutUserInput | ContactsMessageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ContactsMessageScalarWhereInput | ContactsMessageScalarWhereInput[]
  }

  export type UserInfoUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserInfoCreateWithoutUserInput, UserInfoUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserInfoCreateOrConnectWithoutUserInput
    upsert?: UserInfoUpsertWithoutUserInput
    disconnect?: UserInfoWhereInput | boolean
    delete?: UserInfoWhereInput | boolean
    connect?: UserInfoWhereUniqueInput
    update?: XOR<XOR<UserInfoUpdateToOneWithWhereWithoutUserInput, UserInfoUpdateWithoutUserInput>, UserInfoUncheckedUpdateWithoutUserInput>
  }

  export type UserOrderCommentUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserOrderCommentCreateWithoutUserInput, UserOrderCommentUncheckedCreateWithoutUserInput> | UserOrderCommentCreateWithoutUserInput[] | UserOrderCommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserOrderCommentCreateOrConnectWithoutUserInput | UserOrderCommentCreateOrConnectWithoutUserInput[]
    upsert?: UserOrderCommentUpsertWithWhereUniqueWithoutUserInput | UserOrderCommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserOrderCommentCreateManyUserInputEnvelope
    set?: UserOrderCommentWhereUniqueInput | UserOrderCommentWhereUniqueInput[]
    disconnect?: UserOrderCommentWhereUniqueInput | UserOrderCommentWhereUniqueInput[]
    delete?: UserOrderCommentWhereUniqueInput | UserOrderCommentWhereUniqueInput[]
    connect?: UserOrderCommentWhereUniqueInput | UserOrderCommentWhereUniqueInput[]
    update?: UserOrderCommentUpdateWithWhereUniqueWithoutUserInput | UserOrderCommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserOrderCommentUpdateManyWithWhereWithoutUserInput | UserOrderCommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserOrderCommentScalarWhereInput | UserOrderCommentScalarWhereInput[]
  }

  export type AdressUpdateManyWithoutUserNestedInput = {
    create?: XOR<AdressCreateWithoutUserInput, AdressUncheckedCreateWithoutUserInput> | AdressCreateWithoutUserInput[] | AdressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AdressCreateOrConnectWithoutUserInput | AdressCreateOrConnectWithoutUserInput[]
    upsert?: AdressUpsertWithWhereUniqueWithoutUserInput | AdressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AdressCreateManyUserInputEnvelope
    set?: AdressWhereUniqueInput | AdressWhereUniqueInput[]
    disconnect?: AdressWhereUniqueInput | AdressWhereUniqueInput[]
    delete?: AdressWhereUniqueInput | AdressWhereUniqueInput[]
    connect?: AdressWhereUniqueInput | AdressWhereUniqueInput[]
    update?: AdressUpdateWithWhereUniqueWithoutUserInput | AdressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AdressUpdateManyWithWhereWithoutUserInput | AdressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AdressScalarWhereInput | AdressScalarWhereInput[]
  }

  export type OrderUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutUserInput | OrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutUserInput | OrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutUserInput | OrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type CartsProductUpdateOneWithoutUserNestedInput = {
    create?: XOR<CartsProductCreateWithoutUserInput, CartsProductUncheckedCreateWithoutUserInput>
    connectOrCreate?: CartsProductCreateOrConnectWithoutUserInput
    upsert?: CartsProductUpsertWithoutUserInput
    disconnect?: CartsProductWhereInput | boolean
    delete?: CartsProductWhereInput | boolean
    connect?: CartsProductWhereUniqueInput
    update?: XOR<XOR<CartsProductUpdateToOneWithWhereWithoutUserInput, CartsProductUpdateWithoutUserInput>, CartsProductUncheckedUpdateWithoutUserInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ContactsMessageUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ContactsMessageCreateWithoutUserInput, ContactsMessageUncheckedCreateWithoutUserInput> | ContactsMessageCreateWithoutUserInput[] | ContactsMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContactsMessageCreateOrConnectWithoutUserInput | ContactsMessageCreateOrConnectWithoutUserInput[]
    upsert?: ContactsMessageUpsertWithWhereUniqueWithoutUserInput | ContactsMessageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ContactsMessageCreateManyUserInputEnvelope
    set?: ContactsMessageWhereUniqueInput | ContactsMessageWhereUniqueInput[]
    disconnect?: ContactsMessageWhereUniqueInput | ContactsMessageWhereUniqueInput[]
    delete?: ContactsMessageWhereUniqueInput | ContactsMessageWhereUniqueInput[]
    connect?: ContactsMessageWhereUniqueInput | ContactsMessageWhereUniqueInput[]
    update?: ContactsMessageUpdateWithWhereUniqueWithoutUserInput | ContactsMessageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ContactsMessageUpdateManyWithWhereWithoutUserInput | ContactsMessageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ContactsMessageScalarWhereInput | ContactsMessageScalarWhereInput[]
  }

  export type UserInfoUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserInfoCreateWithoutUserInput, UserInfoUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserInfoCreateOrConnectWithoutUserInput
    upsert?: UserInfoUpsertWithoutUserInput
    disconnect?: UserInfoWhereInput | boolean
    delete?: UserInfoWhereInput | boolean
    connect?: UserInfoWhereUniqueInput
    update?: XOR<XOR<UserInfoUpdateToOneWithWhereWithoutUserInput, UserInfoUpdateWithoutUserInput>, UserInfoUncheckedUpdateWithoutUserInput>
  }

  export type UserOrderCommentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserOrderCommentCreateWithoutUserInput, UserOrderCommentUncheckedCreateWithoutUserInput> | UserOrderCommentCreateWithoutUserInput[] | UserOrderCommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserOrderCommentCreateOrConnectWithoutUserInput | UserOrderCommentCreateOrConnectWithoutUserInput[]
    upsert?: UserOrderCommentUpsertWithWhereUniqueWithoutUserInput | UserOrderCommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserOrderCommentCreateManyUserInputEnvelope
    set?: UserOrderCommentWhereUniqueInput | UserOrderCommentWhereUniqueInput[]
    disconnect?: UserOrderCommentWhereUniqueInput | UserOrderCommentWhereUniqueInput[]
    delete?: UserOrderCommentWhereUniqueInput | UserOrderCommentWhereUniqueInput[]
    connect?: UserOrderCommentWhereUniqueInput | UserOrderCommentWhereUniqueInput[]
    update?: UserOrderCommentUpdateWithWhereUniqueWithoutUserInput | UserOrderCommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserOrderCommentUpdateManyWithWhereWithoutUserInput | UserOrderCommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserOrderCommentScalarWhereInput | UserOrderCommentScalarWhereInput[]
  }

  export type AdressUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AdressCreateWithoutUserInput, AdressUncheckedCreateWithoutUserInput> | AdressCreateWithoutUserInput[] | AdressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AdressCreateOrConnectWithoutUserInput | AdressCreateOrConnectWithoutUserInput[]
    upsert?: AdressUpsertWithWhereUniqueWithoutUserInput | AdressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AdressCreateManyUserInputEnvelope
    set?: AdressWhereUniqueInput | AdressWhereUniqueInput[]
    disconnect?: AdressWhereUniqueInput | AdressWhereUniqueInput[]
    delete?: AdressWhereUniqueInput | AdressWhereUniqueInput[]
    connect?: AdressWhereUniqueInput | AdressWhereUniqueInput[]
    update?: AdressUpdateWithWhereUniqueWithoutUserInput | AdressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AdressUpdateManyWithWhereWithoutUserInput | AdressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AdressScalarWhereInput | AdressScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutUserInput | OrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutUserInput | OrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutUserInput | OrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type CartsProductUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<CartsProductCreateWithoutUserInput, CartsProductUncheckedCreateWithoutUserInput>
    connectOrCreate?: CartsProductCreateOrConnectWithoutUserInput
    upsert?: CartsProductUpsertWithoutUserInput
    disconnect?: CartsProductWhereInput | boolean
    delete?: CartsProductWhereInput | boolean
    connect?: CartsProductWhereUniqueInput
    update?: XOR<XOR<CartsProductUpdateToOneWithWhereWithoutUserInput, CartsProductUpdateWithoutUserInput>, CartsProductUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutUserAdressInput = {
    create?: XOR<UserCreateWithoutUserAdressInput, UserUncheckedCreateWithoutUserAdressInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserAdressInput
    connect?: UserWhereUniqueInput
  }

  export type OrderCreateNestedManyWithoutUserAdressInput = {
    create?: XOR<OrderCreateWithoutUserAdressInput, OrderUncheckedCreateWithoutUserAdressInput> | OrderCreateWithoutUserAdressInput[] | OrderUncheckedCreateWithoutUserAdressInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserAdressInput | OrderCreateOrConnectWithoutUserAdressInput[]
    createMany?: OrderCreateManyUserAdressInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutUserAdressInput = {
    create?: XOR<OrderCreateWithoutUserAdressInput, OrderUncheckedCreateWithoutUserAdressInput> | OrderCreateWithoutUserAdressInput[] | OrderUncheckedCreateWithoutUserAdressInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserAdressInput | OrderCreateOrConnectWithoutUserAdressInput[]
    createMany?: OrderCreateManyUserAdressInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type UserUpdateOneWithoutUserAdressNestedInput = {
    create?: XOR<UserCreateWithoutUserAdressInput, UserUncheckedCreateWithoutUserAdressInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserAdressInput
    upsert?: UserUpsertWithoutUserAdressInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserAdressInput, UserUpdateWithoutUserAdressInput>, UserUncheckedUpdateWithoutUserAdressInput>
  }

  export type OrderUpdateManyWithoutUserAdressNestedInput = {
    create?: XOR<OrderCreateWithoutUserAdressInput, OrderUncheckedCreateWithoutUserAdressInput> | OrderCreateWithoutUserAdressInput[] | OrderUncheckedCreateWithoutUserAdressInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserAdressInput | OrderCreateOrConnectWithoutUserAdressInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutUserAdressInput | OrderUpsertWithWhereUniqueWithoutUserAdressInput[]
    createMany?: OrderCreateManyUserAdressInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutUserAdressInput | OrderUpdateWithWhereUniqueWithoutUserAdressInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutUserAdressInput | OrderUpdateManyWithWhereWithoutUserAdressInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutUserAdressNestedInput = {
    create?: XOR<OrderCreateWithoutUserAdressInput, OrderUncheckedCreateWithoutUserAdressInput> | OrderCreateWithoutUserAdressInput[] | OrderUncheckedCreateWithoutUserAdressInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserAdressInput | OrderCreateOrConnectWithoutUserAdressInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutUserAdressInput | OrderUpsertWithWhereUniqueWithoutUserAdressInput[]
    createMany?: OrderCreateManyUserAdressInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutUserAdressInput | OrderUpdateWithWhereUniqueWithoutUserAdressInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutUserAdressInput | OrderUpdateManyWithWhereWithoutUserAdressInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUserInfoInput = {
    create?: XOR<UserCreateWithoutUserInfoInput, UserUncheckedCreateWithoutUserInfoInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserInfoInput
    connect?: UserWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutUserInfoNestedInput = {
    create?: XOR<UserCreateWithoutUserInfoInput, UserUncheckedCreateWithoutUserInfoInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserInfoInput
    upsert?: UserUpsertWithoutUserInfoInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserInfoInput, UserUpdateWithoutUserInfoInput>, UserUncheckedUpdateWithoutUserInfoInput>
  }

  export type UserCreateNestedOneWithoutOrderInput = {
    create?: XOR<UserCreateWithoutOrderInput, UserUncheckedCreateWithoutOrderInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrderInput
    connect?: UserWhereUniqueInput
  }

  export type AdressCreateNestedOneWithoutOrderInput = {
    create?: XOR<AdressCreateWithoutOrderInput, AdressUncheckedCreateWithoutOrderInput>
    connectOrCreate?: AdressCreateOrConnectWithoutOrderInput
    connect?: AdressWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutOrderNestedInput = {
    create?: XOR<UserCreateWithoutOrderInput, UserUncheckedCreateWithoutOrderInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrderInput
    upsert?: UserUpsertWithoutOrderInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOrderInput, UserUpdateWithoutOrderInput>, UserUncheckedUpdateWithoutOrderInput>
  }

  export type AdressUpdateOneWithoutOrderNestedInput = {
    create?: XOR<AdressCreateWithoutOrderInput, AdressUncheckedCreateWithoutOrderInput>
    connectOrCreate?: AdressCreateOrConnectWithoutOrderInput
    upsert?: AdressUpsertWithoutOrderInput
    disconnect?: AdressWhereInput | boolean
    delete?: AdressWhereInput | boolean
    connect?: AdressWhereUniqueInput
    update?: XOR<XOR<AdressUpdateToOneWithWhereWithoutOrderInput, AdressUpdateWithoutOrderInput>, AdressUncheckedUpdateWithoutOrderInput>
  }

  export type ProductCreateNestedOneWithoutOrderProductInput = {
    create?: XOR<ProductCreateWithoutOrderProductInput, ProductUncheckedCreateWithoutOrderProductInput>
    connectOrCreate?: ProductCreateOrConnectWithoutOrderProductInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutOrderProductNestedInput = {
    create?: XOR<ProductCreateWithoutOrderProductInput, ProductUncheckedCreateWithoutOrderProductInput>
    connectOrCreate?: ProductCreateOrConnectWithoutOrderProductInput
    upsert?: ProductUpsertWithoutOrderProductInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutOrderProductInput, ProductUpdateWithoutOrderProductInput>, ProductUncheckedUpdateWithoutOrderProductInput>
  }

  export type UserCreateNestedOneWithoutUserOrderCommentInput = {
    create?: XOR<UserCreateWithoutUserOrderCommentInput, UserUncheckedCreateWithoutUserOrderCommentInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserOrderCommentInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserOrderCommentNestedInput = {
    create?: XOR<UserCreateWithoutUserOrderCommentInput, UserUncheckedCreateWithoutUserOrderCommentInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserOrderCommentInput
    upsert?: UserUpsertWithoutUserOrderCommentInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserOrderCommentInput, UserUpdateWithoutUserOrderCommentInput>, UserUncheckedUpdateWithoutUserOrderCommentInput>
  }

  export type UserCreateNestedOneWithoutContactsMessagesInput = {
    create?: XOR<UserCreateWithoutContactsMessagesInput, UserUncheckedCreateWithoutContactsMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutContactsMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutContactsMessagesNestedInput = {
    create?: XOR<UserCreateWithoutContactsMessagesInput, UserUncheckedCreateWithoutContactsMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutContactsMessagesInput
    upsert?: UserUpsertWithoutContactsMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutContactsMessagesInput, UserUpdateWithoutContactsMessagesInput>, UserUncheckedUpdateWithoutContactsMessagesInput>
  }

  export type ProductDescriptionCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductDescriptionCreateWithoutProductInput, ProductDescriptionUncheckedCreateWithoutProductInput> | ProductDescriptionCreateWithoutProductInput[] | ProductDescriptionUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductDescriptionCreateOrConnectWithoutProductInput | ProductDescriptionCreateOrConnectWithoutProductInput[]
    createMany?: ProductDescriptionCreateManyProductInputEnvelope
    connect?: ProductDescriptionWhereUniqueInput | ProductDescriptionWhereUniqueInput[]
  }

  export type OrderProductCreateNestedManyWithoutProductInput = {
    create?: XOR<OrderProductCreateWithoutProductInput, OrderProductUncheckedCreateWithoutProductInput> | OrderProductCreateWithoutProductInput[] | OrderProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderProductCreateOrConnectWithoutProductInput | OrderProductCreateOrConnectWithoutProductInput[]
    createMany?: OrderProductCreateManyProductInputEnvelope
    connect?: OrderProductWhereUniqueInput | OrderProductWhereUniqueInput[]
  }

  export type CategoryCreateNestedManyWithoutProductInput = {
    create?: XOR<CategoryCreateWithoutProductInput, CategoryUncheckedCreateWithoutProductInput> | CategoryCreateWithoutProductInput[] | CategoryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutProductInput | CategoryCreateOrConnectWithoutProductInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type CartsProductCreateNestedManyWithoutProductInput = {
    create?: XOR<CartsProductCreateWithoutProductInput, CartsProductUncheckedCreateWithoutProductInput> | CartsProductCreateWithoutProductInput[] | CartsProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: CartsProductCreateOrConnectWithoutProductInput | CartsProductCreateOrConnectWithoutProductInput[]
    connect?: CartsProductWhereUniqueInput | CartsProductWhereUniqueInput[]
  }

  export type ProductCharacteristicCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductCharacteristicCreateWithoutProductInput, ProductCharacteristicUncheckedCreateWithoutProductInput> | ProductCharacteristicCreateWithoutProductInput[] | ProductCharacteristicUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductCharacteristicCreateOrConnectWithoutProductInput | ProductCharacteristicCreateOrConnectWithoutProductInput[]
    createMany?: ProductCharacteristicCreateManyProductInputEnvelope
    connect?: ProductCharacteristicWhereUniqueInput | ProductCharacteristicWhereUniqueInput[]
  }

  export type ProductDescriptionUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductDescriptionCreateWithoutProductInput, ProductDescriptionUncheckedCreateWithoutProductInput> | ProductDescriptionCreateWithoutProductInput[] | ProductDescriptionUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductDescriptionCreateOrConnectWithoutProductInput | ProductDescriptionCreateOrConnectWithoutProductInput[]
    createMany?: ProductDescriptionCreateManyProductInputEnvelope
    connect?: ProductDescriptionWhereUniqueInput | ProductDescriptionWhereUniqueInput[]
  }

  export type OrderProductUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<OrderProductCreateWithoutProductInput, OrderProductUncheckedCreateWithoutProductInput> | OrderProductCreateWithoutProductInput[] | OrderProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderProductCreateOrConnectWithoutProductInput | OrderProductCreateOrConnectWithoutProductInput[]
    createMany?: OrderProductCreateManyProductInputEnvelope
    connect?: OrderProductWhereUniqueInput | OrderProductWhereUniqueInput[]
  }

  export type CategoryUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<CategoryCreateWithoutProductInput, CategoryUncheckedCreateWithoutProductInput> | CategoryCreateWithoutProductInput[] | CategoryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutProductInput | CategoryCreateOrConnectWithoutProductInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type CartsProductUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<CartsProductCreateWithoutProductInput, CartsProductUncheckedCreateWithoutProductInput> | CartsProductCreateWithoutProductInput[] | CartsProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: CartsProductCreateOrConnectWithoutProductInput | CartsProductCreateOrConnectWithoutProductInput[]
    connect?: CartsProductWhereUniqueInput | CartsProductWhereUniqueInput[]
  }

  export type ProductCharacteristicUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductCharacteristicCreateWithoutProductInput, ProductCharacteristicUncheckedCreateWithoutProductInput> | ProductCharacteristicCreateWithoutProductInput[] | ProductCharacteristicUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductCharacteristicCreateOrConnectWithoutProductInput | ProductCharacteristicCreateOrConnectWithoutProductInput[]
    createMany?: ProductCharacteristicCreateManyProductInputEnvelope
    connect?: ProductCharacteristicWhereUniqueInput | ProductCharacteristicWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProductDescriptionUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductDescriptionCreateWithoutProductInput, ProductDescriptionUncheckedCreateWithoutProductInput> | ProductDescriptionCreateWithoutProductInput[] | ProductDescriptionUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductDescriptionCreateOrConnectWithoutProductInput | ProductDescriptionCreateOrConnectWithoutProductInput[]
    upsert?: ProductDescriptionUpsertWithWhereUniqueWithoutProductInput | ProductDescriptionUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductDescriptionCreateManyProductInputEnvelope
    set?: ProductDescriptionWhereUniqueInput | ProductDescriptionWhereUniqueInput[]
    disconnect?: ProductDescriptionWhereUniqueInput | ProductDescriptionWhereUniqueInput[]
    delete?: ProductDescriptionWhereUniqueInput | ProductDescriptionWhereUniqueInput[]
    connect?: ProductDescriptionWhereUniqueInput | ProductDescriptionWhereUniqueInput[]
    update?: ProductDescriptionUpdateWithWhereUniqueWithoutProductInput | ProductDescriptionUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductDescriptionUpdateManyWithWhereWithoutProductInput | ProductDescriptionUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductDescriptionScalarWhereInput | ProductDescriptionScalarWhereInput[]
  }

  export type OrderProductUpdateManyWithoutProductNestedInput = {
    create?: XOR<OrderProductCreateWithoutProductInput, OrderProductUncheckedCreateWithoutProductInput> | OrderProductCreateWithoutProductInput[] | OrderProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderProductCreateOrConnectWithoutProductInput | OrderProductCreateOrConnectWithoutProductInput[]
    upsert?: OrderProductUpsertWithWhereUniqueWithoutProductInput | OrderProductUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: OrderProductCreateManyProductInputEnvelope
    set?: OrderProductWhereUniqueInput | OrderProductWhereUniqueInput[]
    disconnect?: OrderProductWhereUniqueInput | OrderProductWhereUniqueInput[]
    delete?: OrderProductWhereUniqueInput | OrderProductWhereUniqueInput[]
    connect?: OrderProductWhereUniqueInput | OrderProductWhereUniqueInput[]
    update?: OrderProductUpdateWithWhereUniqueWithoutProductInput | OrderProductUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: OrderProductUpdateManyWithWhereWithoutProductInput | OrderProductUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: OrderProductScalarWhereInput | OrderProductScalarWhereInput[]
  }

  export type CategoryUpdateManyWithoutProductNestedInput = {
    create?: XOR<CategoryCreateWithoutProductInput, CategoryUncheckedCreateWithoutProductInput> | CategoryCreateWithoutProductInput[] | CategoryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutProductInput | CategoryCreateOrConnectWithoutProductInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutProductInput | CategoryUpsertWithWhereUniqueWithoutProductInput[]
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutProductInput | CategoryUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutProductInput | CategoryUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type CartsProductUpdateManyWithoutProductNestedInput = {
    create?: XOR<CartsProductCreateWithoutProductInput, CartsProductUncheckedCreateWithoutProductInput> | CartsProductCreateWithoutProductInput[] | CartsProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: CartsProductCreateOrConnectWithoutProductInput | CartsProductCreateOrConnectWithoutProductInput[]
    upsert?: CartsProductUpsertWithWhereUniqueWithoutProductInput | CartsProductUpsertWithWhereUniqueWithoutProductInput[]
    set?: CartsProductWhereUniqueInput | CartsProductWhereUniqueInput[]
    disconnect?: CartsProductWhereUniqueInput | CartsProductWhereUniqueInput[]
    delete?: CartsProductWhereUniqueInput | CartsProductWhereUniqueInput[]
    connect?: CartsProductWhereUniqueInput | CartsProductWhereUniqueInput[]
    update?: CartsProductUpdateWithWhereUniqueWithoutProductInput | CartsProductUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: CartsProductUpdateManyWithWhereWithoutProductInput | CartsProductUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: CartsProductScalarWhereInput | CartsProductScalarWhereInput[]
  }

  export type ProductCharacteristicUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductCharacteristicCreateWithoutProductInput, ProductCharacteristicUncheckedCreateWithoutProductInput> | ProductCharacteristicCreateWithoutProductInput[] | ProductCharacteristicUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductCharacteristicCreateOrConnectWithoutProductInput | ProductCharacteristicCreateOrConnectWithoutProductInput[]
    upsert?: ProductCharacteristicUpsertWithWhereUniqueWithoutProductInput | ProductCharacteristicUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductCharacteristicCreateManyProductInputEnvelope
    set?: ProductCharacteristicWhereUniqueInput | ProductCharacteristicWhereUniqueInput[]
    disconnect?: ProductCharacteristicWhereUniqueInput | ProductCharacteristicWhereUniqueInput[]
    delete?: ProductCharacteristicWhereUniqueInput | ProductCharacteristicWhereUniqueInput[]
    connect?: ProductCharacteristicWhereUniqueInput | ProductCharacteristicWhereUniqueInput[]
    update?: ProductCharacteristicUpdateWithWhereUniqueWithoutProductInput | ProductCharacteristicUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductCharacteristicUpdateManyWithWhereWithoutProductInput | ProductCharacteristicUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductCharacteristicScalarWhereInput | ProductCharacteristicScalarWhereInput[]
  }

  export type ProductDescriptionUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductDescriptionCreateWithoutProductInput, ProductDescriptionUncheckedCreateWithoutProductInput> | ProductDescriptionCreateWithoutProductInput[] | ProductDescriptionUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductDescriptionCreateOrConnectWithoutProductInput | ProductDescriptionCreateOrConnectWithoutProductInput[]
    upsert?: ProductDescriptionUpsertWithWhereUniqueWithoutProductInput | ProductDescriptionUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductDescriptionCreateManyProductInputEnvelope
    set?: ProductDescriptionWhereUniqueInput | ProductDescriptionWhereUniqueInput[]
    disconnect?: ProductDescriptionWhereUniqueInput | ProductDescriptionWhereUniqueInput[]
    delete?: ProductDescriptionWhereUniqueInput | ProductDescriptionWhereUniqueInput[]
    connect?: ProductDescriptionWhereUniqueInput | ProductDescriptionWhereUniqueInput[]
    update?: ProductDescriptionUpdateWithWhereUniqueWithoutProductInput | ProductDescriptionUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductDescriptionUpdateManyWithWhereWithoutProductInput | ProductDescriptionUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductDescriptionScalarWhereInput | ProductDescriptionScalarWhereInput[]
  }

  export type OrderProductUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<OrderProductCreateWithoutProductInput, OrderProductUncheckedCreateWithoutProductInput> | OrderProductCreateWithoutProductInput[] | OrderProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderProductCreateOrConnectWithoutProductInput | OrderProductCreateOrConnectWithoutProductInput[]
    upsert?: OrderProductUpsertWithWhereUniqueWithoutProductInput | OrderProductUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: OrderProductCreateManyProductInputEnvelope
    set?: OrderProductWhereUniqueInput | OrderProductWhereUniqueInput[]
    disconnect?: OrderProductWhereUniqueInput | OrderProductWhereUniqueInput[]
    delete?: OrderProductWhereUniqueInput | OrderProductWhereUniqueInput[]
    connect?: OrderProductWhereUniqueInput | OrderProductWhereUniqueInput[]
    update?: OrderProductUpdateWithWhereUniqueWithoutProductInput | OrderProductUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: OrderProductUpdateManyWithWhereWithoutProductInput | OrderProductUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: OrderProductScalarWhereInput | OrderProductScalarWhereInput[]
  }

  export type CategoryUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<CategoryCreateWithoutProductInput, CategoryUncheckedCreateWithoutProductInput> | CategoryCreateWithoutProductInput[] | CategoryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutProductInput | CategoryCreateOrConnectWithoutProductInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutProductInput | CategoryUpsertWithWhereUniqueWithoutProductInput[]
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutProductInput | CategoryUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutProductInput | CategoryUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type CartsProductUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<CartsProductCreateWithoutProductInput, CartsProductUncheckedCreateWithoutProductInput> | CartsProductCreateWithoutProductInput[] | CartsProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: CartsProductCreateOrConnectWithoutProductInput | CartsProductCreateOrConnectWithoutProductInput[]
    upsert?: CartsProductUpsertWithWhereUniqueWithoutProductInput | CartsProductUpsertWithWhereUniqueWithoutProductInput[]
    set?: CartsProductWhereUniqueInput | CartsProductWhereUniqueInput[]
    disconnect?: CartsProductWhereUniqueInput | CartsProductWhereUniqueInput[]
    delete?: CartsProductWhereUniqueInput | CartsProductWhereUniqueInput[]
    connect?: CartsProductWhereUniqueInput | CartsProductWhereUniqueInput[]
    update?: CartsProductUpdateWithWhereUniqueWithoutProductInput | CartsProductUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: CartsProductUpdateManyWithWhereWithoutProductInput | CartsProductUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: CartsProductScalarWhereInput | CartsProductScalarWhereInput[]
  }

  export type ProductCharacteristicUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductCharacteristicCreateWithoutProductInput, ProductCharacteristicUncheckedCreateWithoutProductInput> | ProductCharacteristicCreateWithoutProductInput[] | ProductCharacteristicUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductCharacteristicCreateOrConnectWithoutProductInput | ProductCharacteristicCreateOrConnectWithoutProductInput[]
    upsert?: ProductCharacteristicUpsertWithWhereUniqueWithoutProductInput | ProductCharacteristicUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductCharacteristicCreateManyProductInputEnvelope
    set?: ProductCharacteristicWhereUniqueInput | ProductCharacteristicWhereUniqueInput[]
    disconnect?: ProductCharacteristicWhereUniqueInput | ProductCharacteristicWhereUniqueInput[]
    delete?: ProductCharacteristicWhereUniqueInput | ProductCharacteristicWhereUniqueInput[]
    connect?: ProductCharacteristicWhereUniqueInput | ProductCharacteristicWhereUniqueInput[]
    update?: ProductCharacteristicUpdateWithWhereUniqueWithoutProductInput | ProductCharacteristicUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductCharacteristicUpdateManyWithWhereWithoutProductInput | ProductCharacteristicUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductCharacteristicScalarWhereInput | ProductCharacteristicScalarWhereInput[]
  }

  export type ProductCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryInput | ProductUpsertWithWhereUniqueWithoutCategoryInput[]
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCategoryInput | ProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryInput | ProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryInput | ProductUpsertWithWhereUniqueWithoutCategoryInput[]
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCategoryInput | ProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryInput | ProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCartsProductInput = {
    create?: XOR<UserCreateWithoutCartsProductInput, UserUncheckedCreateWithoutCartsProductInput>
    connectOrCreate?: UserCreateOrConnectWithoutCartsProductInput
    connect?: UserWhereUniqueInput
  }

  export type ProductCreateNestedManyWithoutCartsProductInput = {
    create?: XOR<ProductCreateWithoutCartsProductInput, ProductUncheckedCreateWithoutCartsProductInput> | ProductCreateWithoutCartsProductInput[] | ProductUncheckedCreateWithoutCartsProductInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCartsProductInput | ProductCreateOrConnectWithoutCartsProductInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutCartsProductInput = {
    create?: XOR<ProductCreateWithoutCartsProductInput, ProductUncheckedCreateWithoutCartsProductInput> | ProductCreateWithoutCartsProductInput[] | ProductUncheckedCreateWithoutCartsProductInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCartsProductInput | ProductCreateOrConnectWithoutCartsProductInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutCartsProductNestedInput = {
    create?: XOR<UserCreateWithoutCartsProductInput, UserUncheckedCreateWithoutCartsProductInput>
    connectOrCreate?: UserCreateOrConnectWithoutCartsProductInput
    upsert?: UserUpsertWithoutCartsProductInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCartsProductInput, UserUpdateWithoutCartsProductInput>, UserUncheckedUpdateWithoutCartsProductInput>
  }

  export type ProductUpdateManyWithoutCartsProductNestedInput = {
    create?: XOR<ProductCreateWithoutCartsProductInput, ProductUncheckedCreateWithoutCartsProductInput> | ProductCreateWithoutCartsProductInput[] | ProductUncheckedCreateWithoutCartsProductInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCartsProductInput | ProductCreateOrConnectWithoutCartsProductInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCartsProductInput | ProductUpsertWithWhereUniqueWithoutCartsProductInput[]
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCartsProductInput | ProductUpdateWithWhereUniqueWithoutCartsProductInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCartsProductInput | ProductUpdateManyWithWhereWithoutCartsProductInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutCartsProductNestedInput = {
    create?: XOR<ProductCreateWithoutCartsProductInput, ProductUncheckedCreateWithoutCartsProductInput> | ProductCreateWithoutCartsProductInput[] | ProductUncheckedCreateWithoutCartsProductInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCartsProductInput | ProductCreateOrConnectWithoutCartsProductInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCartsProductInput | ProductUpsertWithWhereUniqueWithoutCartsProductInput[]
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCartsProductInput | ProductUpdateWithWhereUniqueWithoutCartsProductInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCartsProductInput | ProductUpdateManyWithWhereWithoutCartsProductInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutProductDescriptionInput = {
    create?: XOR<ProductCreateWithoutProductDescriptionInput, ProductUncheckedCreateWithoutProductDescriptionInput>
    connectOrCreate?: ProductCreateOrConnectWithoutProductDescriptionInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutProductDescriptionNestedInput = {
    create?: XOR<ProductCreateWithoutProductDescriptionInput, ProductUncheckedCreateWithoutProductDescriptionInput>
    connectOrCreate?: ProductCreateOrConnectWithoutProductDescriptionInput
    upsert?: ProductUpsertWithoutProductDescriptionInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutProductDescriptionInput, ProductUpdateWithoutProductDescriptionInput>, ProductUncheckedUpdateWithoutProductDescriptionInput>
  }

  export type ProductCreateNestedOneWithoutProductCharacteristicInput = {
    create?: XOR<ProductCreateWithoutProductCharacteristicInput, ProductUncheckedCreateWithoutProductCharacteristicInput>
    connectOrCreate?: ProductCreateOrConnectWithoutProductCharacteristicInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutProductCharacteristicNestedInput = {
    create?: XOR<ProductCreateWithoutProductCharacteristicInput, ProductUncheckedCreateWithoutProductCharacteristicInput>
    connectOrCreate?: ProductCreateOrConnectWithoutProductCharacteristicInput
    upsert?: ProductUpsertWithoutProductCharacteristicInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutProductCharacteristicInput, ProductUpdateWithoutProductCharacteristicInput>, ProductUncheckedUpdateWithoutProductCharacteristicInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type ContactsMessageCreateWithoutUserInput = {
    message: string
  }

  export type ContactsMessageUncheckedCreateWithoutUserInput = {
    id?: number
    message: string
  }

  export type ContactsMessageCreateOrConnectWithoutUserInput = {
    where: ContactsMessageWhereUniqueInput
    create: XOR<ContactsMessageCreateWithoutUserInput, ContactsMessageUncheckedCreateWithoutUserInput>
  }

  export type ContactsMessageCreateManyUserInputEnvelope = {
    data: ContactsMessageCreateManyUserInput | ContactsMessageCreateManyUserInput[]
  }

  export type UserInfoCreateWithoutUserInput = {
    name: string
    surname: string
    middleName: string
    birthday: Date | string
    phoneNumber: number
  }

  export type UserInfoUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    surname: string
    middleName: string
    birthday: Date | string
    phoneNumber: number
  }

  export type UserInfoCreateOrConnectWithoutUserInput = {
    where: UserInfoWhereUniqueInput
    create: XOR<UserInfoCreateWithoutUserInput, UserInfoUncheckedCreateWithoutUserInput>
  }

  export type UserOrderCommentCreateWithoutUserInput = {
    comment: string
  }

  export type UserOrderCommentUncheckedCreateWithoutUserInput = {
    id?: number
    comment: string
  }

  export type UserOrderCommentCreateOrConnectWithoutUserInput = {
    where: UserOrderCommentWhereUniqueInput
    create: XOR<UserOrderCommentCreateWithoutUserInput, UserOrderCommentUncheckedCreateWithoutUserInput>
  }

  export type UserOrderCommentCreateManyUserInputEnvelope = {
    data: UserOrderCommentCreateManyUserInput | UserOrderCommentCreateManyUserInput[]
  }

  export type AdressCreateWithoutUserInput = {
    postDepartament: string
    street: string
    home: string
    appartament: number
    entrants: number
    order?: OrderCreateNestedManyWithoutUserAdressInput
  }

  export type AdressUncheckedCreateWithoutUserInput = {
    id?: number
    postDepartament: string
    street: string
    home: string
    appartament: number
    entrants: number
    order?: OrderUncheckedCreateNestedManyWithoutUserAdressInput
  }

  export type AdressCreateOrConnectWithoutUserInput = {
    where: AdressWhereUniqueInput
    create: XOR<AdressCreateWithoutUserInput, AdressUncheckedCreateWithoutUserInput>
  }

  export type AdressCreateManyUserInputEnvelope = {
    data: AdressCreateManyUserInput | AdressCreateManyUserInput[]
  }

  export type OrderCreateWithoutUserInput = {
    totalPrice: number
    status: string
    createdAt: string
    userAdress?: AdressCreateNestedOneWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutUserInput = {
    id?: number
    totalPrice: number
    status: string
    createdAt: string
    userAdressId: number
  }

  export type OrderCreateOrConnectWithoutUserInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>
  }

  export type OrderCreateManyUserInputEnvelope = {
    data: OrderCreateManyUserInput | OrderCreateManyUserInput[]
  }

  export type CartsProductCreateWithoutUserInput = {
    amout: number
    product?: ProductCreateNestedManyWithoutCartsProductInput
  }

  export type CartsProductUncheckedCreateWithoutUserInput = {
    id?: number
    amout: number
    product?: ProductUncheckedCreateNestedManyWithoutCartsProductInput
  }

  export type CartsProductCreateOrConnectWithoutUserInput = {
    where: CartsProductWhereUniqueInput
    create: XOR<CartsProductCreateWithoutUserInput, CartsProductUncheckedCreateWithoutUserInput>
  }

  export type ContactsMessageUpsertWithWhereUniqueWithoutUserInput = {
    where: ContactsMessageWhereUniqueInput
    update: XOR<ContactsMessageUpdateWithoutUserInput, ContactsMessageUncheckedUpdateWithoutUserInput>
    create: XOR<ContactsMessageCreateWithoutUserInput, ContactsMessageUncheckedCreateWithoutUserInput>
  }

  export type ContactsMessageUpdateWithWhereUniqueWithoutUserInput = {
    where: ContactsMessageWhereUniqueInput
    data: XOR<ContactsMessageUpdateWithoutUserInput, ContactsMessageUncheckedUpdateWithoutUserInput>
  }

  export type ContactsMessageUpdateManyWithWhereWithoutUserInput = {
    where: ContactsMessageScalarWhereInput
    data: XOR<ContactsMessageUpdateManyMutationInput, ContactsMessageUncheckedUpdateManyWithoutUserInput>
  }

  export type ContactsMessageScalarWhereInput = {
    AND?: ContactsMessageScalarWhereInput | ContactsMessageScalarWhereInput[]
    OR?: ContactsMessageScalarWhereInput[]
    NOT?: ContactsMessageScalarWhereInput | ContactsMessageScalarWhereInput[]
    id?: IntFilter<"ContactsMessage"> | number
    message?: StringFilter<"ContactsMessage"> | string
    userId?: IntFilter<"ContactsMessage"> | number
  }

  export type UserInfoUpsertWithoutUserInput = {
    update: XOR<UserInfoUpdateWithoutUserInput, UserInfoUncheckedUpdateWithoutUserInput>
    create: XOR<UserInfoCreateWithoutUserInput, UserInfoUncheckedCreateWithoutUserInput>
    where?: UserInfoWhereInput
  }

  export type UserInfoUpdateToOneWithWhereWithoutUserInput = {
    where?: UserInfoWhereInput
    data: XOR<UserInfoUpdateWithoutUserInput, UserInfoUncheckedUpdateWithoutUserInput>
  }

  export type UserInfoUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    middleName?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    phoneNumber?: IntFieldUpdateOperationsInput | number
  }

  export type UserInfoUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    middleName?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    phoneNumber?: IntFieldUpdateOperationsInput | number
  }

  export type UserOrderCommentUpsertWithWhereUniqueWithoutUserInput = {
    where: UserOrderCommentWhereUniqueInput
    update: XOR<UserOrderCommentUpdateWithoutUserInput, UserOrderCommentUncheckedUpdateWithoutUserInput>
    create: XOR<UserOrderCommentCreateWithoutUserInput, UserOrderCommentUncheckedCreateWithoutUserInput>
  }

  export type UserOrderCommentUpdateWithWhereUniqueWithoutUserInput = {
    where: UserOrderCommentWhereUniqueInput
    data: XOR<UserOrderCommentUpdateWithoutUserInput, UserOrderCommentUncheckedUpdateWithoutUserInput>
  }

  export type UserOrderCommentUpdateManyWithWhereWithoutUserInput = {
    where: UserOrderCommentScalarWhereInput
    data: XOR<UserOrderCommentUpdateManyMutationInput, UserOrderCommentUncheckedUpdateManyWithoutUserInput>
  }

  export type UserOrderCommentScalarWhereInput = {
    AND?: UserOrderCommentScalarWhereInput | UserOrderCommentScalarWhereInput[]
    OR?: UserOrderCommentScalarWhereInput[]
    NOT?: UserOrderCommentScalarWhereInput | UserOrderCommentScalarWhereInput[]
    id?: IntFilter<"UserOrderComment"> | number
    comment?: StringFilter<"UserOrderComment"> | string
    userId?: IntFilter<"UserOrderComment"> | number
  }

  export type AdressUpsertWithWhereUniqueWithoutUserInput = {
    where: AdressWhereUniqueInput
    update: XOR<AdressUpdateWithoutUserInput, AdressUncheckedUpdateWithoutUserInput>
    create: XOR<AdressCreateWithoutUserInput, AdressUncheckedCreateWithoutUserInput>
  }

  export type AdressUpdateWithWhereUniqueWithoutUserInput = {
    where: AdressWhereUniqueInput
    data: XOR<AdressUpdateWithoutUserInput, AdressUncheckedUpdateWithoutUserInput>
  }

  export type AdressUpdateManyWithWhereWithoutUserInput = {
    where: AdressScalarWhereInput
    data: XOR<AdressUpdateManyMutationInput, AdressUncheckedUpdateManyWithoutUserInput>
  }

  export type AdressScalarWhereInput = {
    AND?: AdressScalarWhereInput | AdressScalarWhereInput[]
    OR?: AdressScalarWhereInput[]
    NOT?: AdressScalarWhereInput | AdressScalarWhereInput[]
    id?: IntFilter<"Adress"> | number
    postDepartament?: StringFilter<"Adress"> | string
    street?: StringFilter<"Adress"> | string
    home?: StringFilter<"Adress"> | string
    appartament?: IntFilter<"Adress"> | number
    entrants?: IntFilter<"Adress"> | number
    userId?: IntFilter<"Adress"> | number
  }

  export type OrderUpsertWithWhereUniqueWithoutUserInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutUserInput, OrderUncheckedUpdateWithoutUserInput>
    create: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutUserInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutUserInput, OrderUncheckedUpdateWithoutUserInput>
  }

  export type OrderUpdateManyWithWhereWithoutUserInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutUserInput>
  }

  export type OrderScalarWhereInput = {
    AND?: OrderScalarWhereInput | OrderScalarWhereInput[]
    OR?: OrderScalarWhereInput[]
    NOT?: OrderScalarWhereInput | OrderScalarWhereInput[]
    id?: IntFilter<"Order"> | number
    totalPrice?: IntFilter<"Order"> | number
    status?: StringFilter<"Order"> | string
    createdAt?: StringFilter<"Order"> | string
    userId?: IntFilter<"Order"> | number
    userAdressId?: IntFilter<"Order"> | number
  }

  export type CartsProductUpsertWithoutUserInput = {
    update: XOR<CartsProductUpdateWithoutUserInput, CartsProductUncheckedUpdateWithoutUserInput>
    create: XOR<CartsProductCreateWithoutUserInput, CartsProductUncheckedCreateWithoutUserInput>
    where?: CartsProductWhereInput
  }

  export type CartsProductUpdateToOneWithWhereWithoutUserInput = {
    where?: CartsProductWhereInput
    data: XOR<CartsProductUpdateWithoutUserInput, CartsProductUncheckedUpdateWithoutUserInput>
  }

  export type CartsProductUpdateWithoutUserInput = {
    amout?: IntFieldUpdateOperationsInput | number
    product?: ProductUpdateManyWithoutCartsProductNestedInput
  }

  export type CartsProductUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    amout?: IntFieldUpdateOperationsInput | number
    product?: ProductUncheckedUpdateManyWithoutCartsProductNestedInput
  }

  export type UserCreateWithoutUserAdressInput = {
    username: string
    email: string
    password: string
    isAdmin: boolean
    name?: string | null
    surname?: string | null
    middleName?: string | null
    birthday?: string | null
    phoneNumber?: string | null
    contactsMessages?: ContactsMessageCreateNestedManyWithoutUserInput
    userInfo?: UserInfoCreateNestedOneWithoutUserInput
    userOrderComment?: UserOrderCommentCreateNestedManyWithoutUserInput
    order?: OrderCreateNestedManyWithoutUserInput
    cartsProduct?: CartsProductCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserAdressInput = {
    id?: number
    username: string
    email: string
    password: string
    isAdmin: boolean
    name?: string | null
    surname?: string | null
    middleName?: string | null
    birthday?: string | null
    phoneNumber?: string | null
    contactsMessages?: ContactsMessageUncheckedCreateNestedManyWithoutUserInput
    userInfo?: UserInfoUncheckedCreateNestedOneWithoutUserInput
    userOrderComment?: UserOrderCommentUncheckedCreateNestedManyWithoutUserInput
    order?: OrderUncheckedCreateNestedManyWithoutUserInput
    cartsProduct?: CartsProductUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserAdressInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserAdressInput, UserUncheckedCreateWithoutUserAdressInput>
  }

  export type OrderCreateWithoutUserAdressInput = {
    totalPrice: number
    status: string
    createdAt: string
    user: UserCreateNestedOneWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutUserAdressInput = {
    id?: number
    totalPrice: number
    status: string
    createdAt: string
    userId: number
  }

  export type OrderCreateOrConnectWithoutUserAdressInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutUserAdressInput, OrderUncheckedCreateWithoutUserAdressInput>
  }

  export type OrderCreateManyUserAdressInputEnvelope = {
    data: OrderCreateManyUserAdressInput | OrderCreateManyUserAdressInput[]
  }

  export type UserUpsertWithoutUserAdressInput = {
    update: XOR<UserUpdateWithoutUserAdressInput, UserUncheckedUpdateWithoutUserAdressInput>
    create: XOR<UserCreateWithoutUserAdressInput, UserUncheckedCreateWithoutUserAdressInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserAdressInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserAdressInput, UserUncheckedUpdateWithoutUserAdressInput>
  }

  export type UserUpdateWithoutUserAdressInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    contactsMessages?: ContactsMessageUpdateManyWithoutUserNestedInput
    userInfo?: UserInfoUpdateOneWithoutUserNestedInput
    userOrderComment?: UserOrderCommentUpdateManyWithoutUserNestedInput
    order?: OrderUpdateManyWithoutUserNestedInput
    cartsProduct?: CartsProductUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserAdressInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    contactsMessages?: ContactsMessageUncheckedUpdateManyWithoutUserNestedInput
    userInfo?: UserInfoUncheckedUpdateOneWithoutUserNestedInput
    userOrderComment?: UserOrderCommentUncheckedUpdateManyWithoutUserNestedInput
    order?: OrderUncheckedUpdateManyWithoutUserNestedInput
    cartsProduct?: CartsProductUncheckedUpdateOneWithoutUserNestedInput
  }

  export type OrderUpsertWithWhereUniqueWithoutUserAdressInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutUserAdressInput, OrderUncheckedUpdateWithoutUserAdressInput>
    create: XOR<OrderCreateWithoutUserAdressInput, OrderUncheckedCreateWithoutUserAdressInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutUserAdressInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutUserAdressInput, OrderUncheckedUpdateWithoutUserAdressInput>
  }

  export type OrderUpdateManyWithWhereWithoutUserAdressInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutUserAdressInput>
  }

  export type UserCreateWithoutUserInfoInput = {
    username: string
    email: string
    password: string
    isAdmin: boolean
    name?: string | null
    surname?: string | null
    middleName?: string | null
    birthday?: string | null
    phoneNumber?: string | null
    contactsMessages?: ContactsMessageCreateNestedManyWithoutUserInput
    userOrderComment?: UserOrderCommentCreateNestedManyWithoutUserInput
    userAdress?: AdressCreateNestedManyWithoutUserInput
    order?: OrderCreateNestedManyWithoutUserInput
    cartsProduct?: CartsProductCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserInfoInput = {
    id?: number
    username: string
    email: string
    password: string
    isAdmin: boolean
    name?: string | null
    surname?: string | null
    middleName?: string | null
    birthday?: string | null
    phoneNumber?: string | null
    contactsMessages?: ContactsMessageUncheckedCreateNestedManyWithoutUserInput
    userOrderComment?: UserOrderCommentUncheckedCreateNestedManyWithoutUserInput
    userAdress?: AdressUncheckedCreateNestedManyWithoutUserInput
    order?: OrderUncheckedCreateNestedManyWithoutUserInput
    cartsProduct?: CartsProductUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserInfoInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserInfoInput, UserUncheckedCreateWithoutUserInfoInput>
  }

  export type UserUpsertWithoutUserInfoInput = {
    update: XOR<UserUpdateWithoutUserInfoInput, UserUncheckedUpdateWithoutUserInfoInput>
    create: XOR<UserCreateWithoutUserInfoInput, UserUncheckedCreateWithoutUserInfoInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserInfoInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserInfoInput, UserUncheckedUpdateWithoutUserInfoInput>
  }

  export type UserUpdateWithoutUserInfoInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    contactsMessages?: ContactsMessageUpdateManyWithoutUserNestedInput
    userOrderComment?: UserOrderCommentUpdateManyWithoutUserNestedInput
    userAdress?: AdressUpdateManyWithoutUserNestedInput
    order?: OrderUpdateManyWithoutUserNestedInput
    cartsProduct?: CartsProductUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserInfoInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    contactsMessages?: ContactsMessageUncheckedUpdateManyWithoutUserNestedInput
    userOrderComment?: UserOrderCommentUncheckedUpdateManyWithoutUserNestedInput
    userAdress?: AdressUncheckedUpdateManyWithoutUserNestedInput
    order?: OrderUncheckedUpdateManyWithoutUserNestedInput
    cartsProduct?: CartsProductUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutOrderInput = {
    username: string
    email: string
    password: string
    isAdmin: boolean
    name?: string | null
    surname?: string | null
    middleName?: string | null
    birthday?: string | null
    phoneNumber?: string | null
    contactsMessages?: ContactsMessageCreateNestedManyWithoutUserInput
    userInfo?: UserInfoCreateNestedOneWithoutUserInput
    userOrderComment?: UserOrderCommentCreateNestedManyWithoutUserInput
    userAdress?: AdressCreateNestedManyWithoutUserInput
    cartsProduct?: CartsProductCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOrderInput = {
    id?: number
    username: string
    email: string
    password: string
    isAdmin: boolean
    name?: string | null
    surname?: string | null
    middleName?: string | null
    birthday?: string | null
    phoneNumber?: string | null
    contactsMessages?: ContactsMessageUncheckedCreateNestedManyWithoutUserInput
    userInfo?: UserInfoUncheckedCreateNestedOneWithoutUserInput
    userOrderComment?: UserOrderCommentUncheckedCreateNestedManyWithoutUserInput
    userAdress?: AdressUncheckedCreateNestedManyWithoutUserInput
    cartsProduct?: CartsProductUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOrderInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrderInput, UserUncheckedCreateWithoutOrderInput>
  }

  export type AdressCreateWithoutOrderInput = {
    postDepartament: string
    street: string
    home: string
    appartament: number
    entrants: number
    user?: UserCreateNestedOneWithoutUserAdressInput
  }

  export type AdressUncheckedCreateWithoutOrderInput = {
    id?: number
    postDepartament: string
    street: string
    home: string
    appartament: number
    entrants: number
    userId: number
  }

  export type AdressCreateOrConnectWithoutOrderInput = {
    where: AdressWhereUniqueInput
    create: XOR<AdressCreateWithoutOrderInput, AdressUncheckedCreateWithoutOrderInput>
  }

  export type UserUpsertWithoutOrderInput = {
    update: XOR<UserUpdateWithoutOrderInput, UserUncheckedUpdateWithoutOrderInput>
    create: XOR<UserCreateWithoutOrderInput, UserUncheckedCreateWithoutOrderInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOrderInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOrderInput, UserUncheckedUpdateWithoutOrderInput>
  }

  export type UserUpdateWithoutOrderInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    contactsMessages?: ContactsMessageUpdateManyWithoutUserNestedInput
    userInfo?: UserInfoUpdateOneWithoutUserNestedInput
    userOrderComment?: UserOrderCommentUpdateManyWithoutUserNestedInput
    userAdress?: AdressUpdateManyWithoutUserNestedInput
    cartsProduct?: CartsProductUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    contactsMessages?: ContactsMessageUncheckedUpdateManyWithoutUserNestedInput
    userInfo?: UserInfoUncheckedUpdateOneWithoutUserNestedInput
    userOrderComment?: UserOrderCommentUncheckedUpdateManyWithoutUserNestedInput
    userAdress?: AdressUncheckedUpdateManyWithoutUserNestedInput
    cartsProduct?: CartsProductUncheckedUpdateOneWithoutUserNestedInput
  }

  export type AdressUpsertWithoutOrderInput = {
    update: XOR<AdressUpdateWithoutOrderInput, AdressUncheckedUpdateWithoutOrderInput>
    create: XOR<AdressCreateWithoutOrderInput, AdressUncheckedCreateWithoutOrderInput>
    where?: AdressWhereInput
  }

  export type AdressUpdateToOneWithWhereWithoutOrderInput = {
    where?: AdressWhereInput
    data: XOR<AdressUpdateWithoutOrderInput, AdressUncheckedUpdateWithoutOrderInput>
  }

  export type AdressUpdateWithoutOrderInput = {
    postDepartament?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    home?: StringFieldUpdateOperationsInput | string
    appartament?: IntFieldUpdateOperationsInput | number
    entrants?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneWithoutUserAdressNestedInput
  }

  export type AdressUncheckedUpdateWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    postDepartament?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    home?: StringFieldUpdateOperationsInput | string
    appartament?: IntFieldUpdateOperationsInput | number
    entrants?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductCreateWithoutOrderProductInput = {
    title: string
    description: string
    color: string
    price: number
    discount?: number | null
    img: string
    creationDate?: Date | string
    productDescription?: ProductDescriptionCreateNestedManyWithoutProductInput
    category?: CategoryCreateNestedManyWithoutProductInput
    cartsProduct?: CartsProductCreateNestedManyWithoutProductInput
    ProductCharacteristic?: ProductCharacteristicCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutOrderProductInput = {
    id?: number
    title: string
    description: string
    color: string
    price: number
    discount?: number | null
    img: string
    creationDate?: Date | string
    productDescription?: ProductDescriptionUncheckedCreateNestedManyWithoutProductInput
    category?: CategoryUncheckedCreateNestedManyWithoutProductInput
    cartsProduct?: CartsProductUncheckedCreateNestedManyWithoutProductInput
    ProductCharacteristic?: ProductCharacteristicUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutOrderProductInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutOrderProductInput, ProductUncheckedCreateWithoutOrderProductInput>
  }

  export type ProductUpsertWithoutOrderProductInput = {
    update: XOR<ProductUpdateWithoutOrderProductInput, ProductUncheckedUpdateWithoutOrderProductInput>
    create: XOR<ProductCreateWithoutOrderProductInput, ProductUncheckedCreateWithoutOrderProductInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutOrderProductInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutOrderProductInput, ProductUncheckedUpdateWithoutOrderProductInput>
  }

  export type ProductUpdateWithoutOrderProductInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    discount?: NullableIntFieldUpdateOperationsInput | number | null
    img?: StringFieldUpdateOperationsInput | string
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    productDescription?: ProductDescriptionUpdateManyWithoutProductNestedInput
    category?: CategoryUpdateManyWithoutProductNestedInput
    cartsProduct?: CartsProductUpdateManyWithoutProductNestedInput
    ProductCharacteristic?: ProductCharacteristicUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutOrderProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    discount?: NullableIntFieldUpdateOperationsInput | number | null
    img?: StringFieldUpdateOperationsInput | string
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    productDescription?: ProductDescriptionUncheckedUpdateManyWithoutProductNestedInput
    category?: CategoryUncheckedUpdateManyWithoutProductNestedInput
    cartsProduct?: CartsProductUncheckedUpdateManyWithoutProductNestedInput
    ProductCharacteristic?: ProductCharacteristicUncheckedUpdateManyWithoutProductNestedInput
  }

  export type UserCreateWithoutUserOrderCommentInput = {
    username: string
    email: string
    password: string
    isAdmin: boolean
    name?: string | null
    surname?: string | null
    middleName?: string | null
    birthday?: string | null
    phoneNumber?: string | null
    contactsMessages?: ContactsMessageCreateNestedManyWithoutUserInput
    userInfo?: UserInfoCreateNestedOneWithoutUserInput
    userAdress?: AdressCreateNestedManyWithoutUserInput
    order?: OrderCreateNestedManyWithoutUserInput
    cartsProduct?: CartsProductCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserOrderCommentInput = {
    id?: number
    username: string
    email: string
    password: string
    isAdmin: boolean
    name?: string | null
    surname?: string | null
    middleName?: string | null
    birthday?: string | null
    phoneNumber?: string | null
    contactsMessages?: ContactsMessageUncheckedCreateNestedManyWithoutUserInput
    userInfo?: UserInfoUncheckedCreateNestedOneWithoutUserInput
    userAdress?: AdressUncheckedCreateNestedManyWithoutUserInput
    order?: OrderUncheckedCreateNestedManyWithoutUserInput
    cartsProduct?: CartsProductUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserOrderCommentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserOrderCommentInput, UserUncheckedCreateWithoutUserOrderCommentInput>
  }

  export type UserUpsertWithoutUserOrderCommentInput = {
    update: XOR<UserUpdateWithoutUserOrderCommentInput, UserUncheckedUpdateWithoutUserOrderCommentInput>
    create: XOR<UserCreateWithoutUserOrderCommentInput, UserUncheckedCreateWithoutUserOrderCommentInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserOrderCommentInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserOrderCommentInput, UserUncheckedUpdateWithoutUserOrderCommentInput>
  }

  export type UserUpdateWithoutUserOrderCommentInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    contactsMessages?: ContactsMessageUpdateManyWithoutUserNestedInput
    userInfo?: UserInfoUpdateOneWithoutUserNestedInput
    userAdress?: AdressUpdateManyWithoutUserNestedInput
    order?: OrderUpdateManyWithoutUserNestedInput
    cartsProduct?: CartsProductUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserOrderCommentInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    contactsMessages?: ContactsMessageUncheckedUpdateManyWithoutUserNestedInput
    userInfo?: UserInfoUncheckedUpdateOneWithoutUserNestedInput
    userAdress?: AdressUncheckedUpdateManyWithoutUserNestedInput
    order?: OrderUncheckedUpdateManyWithoutUserNestedInput
    cartsProduct?: CartsProductUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutContactsMessagesInput = {
    username: string
    email: string
    password: string
    isAdmin: boolean
    name?: string | null
    surname?: string | null
    middleName?: string | null
    birthday?: string | null
    phoneNumber?: string | null
    userInfo?: UserInfoCreateNestedOneWithoutUserInput
    userOrderComment?: UserOrderCommentCreateNestedManyWithoutUserInput
    userAdress?: AdressCreateNestedManyWithoutUserInput
    order?: OrderCreateNestedManyWithoutUserInput
    cartsProduct?: CartsProductCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutContactsMessagesInput = {
    id?: number
    username: string
    email: string
    password: string
    isAdmin: boolean
    name?: string | null
    surname?: string | null
    middleName?: string | null
    birthday?: string | null
    phoneNumber?: string | null
    userInfo?: UserInfoUncheckedCreateNestedOneWithoutUserInput
    userOrderComment?: UserOrderCommentUncheckedCreateNestedManyWithoutUserInput
    userAdress?: AdressUncheckedCreateNestedManyWithoutUserInput
    order?: OrderUncheckedCreateNestedManyWithoutUserInput
    cartsProduct?: CartsProductUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutContactsMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutContactsMessagesInput, UserUncheckedCreateWithoutContactsMessagesInput>
  }

  export type UserUpsertWithoutContactsMessagesInput = {
    update: XOR<UserUpdateWithoutContactsMessagesInput, UserUncheckedUpdateWithoutContactsMessagesInput>
    create: XOR<UserCreateWithoutContactsMessagesInput, UserUncheckedCreateWithoutContactsMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutContactsMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutContactsMessagesInput, UserUncheckedUpdateWithoutContactsMessagesInput>
  }

  export type UserUpdateWithoutContactsMessagesInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    userInfo?: UserInfoUpdateOneWithoutUserNestedInput
    userOrderComment?: UserOrderCommentUpdateManyWithoutUserNestedInput
    userAdress?: AdressUpdateManyWithoutUserNestedInput
    order?: OrderUpdateManyWithoutUserNestedInput
    cartsProduct?: CartsProductUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutContactsMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    userInfo?: UserInfoUncheckedUpdateOneWithoutUserNestedInput
    userOrderComment?: UserOrderCommentUncheckedUpdateManyWithoutUserNestedInput
    userAdress?: AdressUncheckedUpdateManyWithoutUserNestedInput
    order?: OrderUncheckedUpdateManyWithoutUserNestedInput
    cartsProduct?: CartsProductUncheckedUpdateOneWithoutUserNestedInput
  }

  export type ProductDescriptionCreateWithoutProductInput = {
    title: string
    description: string
    img: string
  }

  export type ProductDescriptionUncheckedCreateWithoutProductInput = {
    id?: number
    title: string
    description: string
    img: string
  }

  export type ProductDescriptionCreateOrConnectWithoutProductInput = {
    where: ProductDescriptionWhereUniqueInput
    create: XOR<ProductDescriptionCreateWithoutProductInput, ProductDescriptionUncheckedCreateWithoutProductInput>
  }

  export type ProductDescriptionCreateManyProductInputEnvelope = {
    data: ProductDescriptionCreateManyProductInput | ProductDescriptionCreateManyProductInput[]
  }

  export type OrderProductCreateWithoutProductInput = {
    amount: number
    priceInPurchase: number
  }

  export type OrderProductUncheckedCreateWithoutProductInput = {
    id?: number
    amount: number
    priceInPurchase: number
  }

  export type OrderProductCreateOrConnectWithoutProductInput = {
    where: OrderProductWhereUniqueInput
    create: XOR<OrderProductCreateWithoutProductInput, OrderProductUncheckedCreateWithoutProductInput>
  }

  export type OrderProductCreateManyProductInputEnvelope = {
    data: OrderProductCreateManyProductInput | OrderProductCreateManyProductInput[]
  }

  export type CategoryCreateWithoutProductInput = {
    name: string
  }

  export type CategoryUncheckedCreateWithoutProductInput = {
    id?: number
    name: string
  }

  export type CategoryCreateOrConnectWithoutProductInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutProductInput, CategoryUncheckedCreateWithoutProductInput>
  }

  export type CartsProductCreateWithoutProductInput = {
    amout: number
    user: UserCreateNestedOneWithoutCartsProductInput
  }

  export type CartsProductUncheckedCreateWithoutProductInput = {
    id?: number
    amout: number
    userId: number
  }

  export type CartsProductCreateOrConnectWithoutProductInput = {
    where: CartsProductWhereUniqueInput
    create: XOR<CartsProductCreateWithoutProductInput, CartsProductUncheckedCreateWithoutProductInput>
  }

  export type ProductCharacteristicCreateWithoutProductInput = {
    title: string
    description: string
    img: string
    coding: string
    ufsStorage: number
    eMMSStorage: number
  }

  export type ProductCharacteristicUncheckedCreateWithoutProductInput = {
    id?: number
    title: string
    description: string
    img: string
    coding: string
    ufsStorage: number
    eMMSStorage: number
  }

  export type ProductCharacteristicCreateOrConnectWithoutProductInput = {
    where: ProductCharacteristicWhereUniqueInput
    create: XOR<ProductCharacteristicCreateWithoutProductInput, ProductCharacteristicUncheckedCreateWithoutProductInput>
  }

  export type ProductCharacteristicCreateManyProductInputEnvelope = {
    data: ProductCharacteristicCreateManyProductInput | ProductCharacteristicCreateManyProductInput[]
  }

  export type ProductDescriptionUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductDescriptionWhereUniqueInput
    update: XOR<ProductDescriptionUpdateWithoutProductInput, ProductDescriptionUncheckedUpdateWithoutProductInput>
    create: XOR<ProductDescriptionCreateWithoutProductInput, ProductDescriptionUncheckedCreateWithoutProductInput>
  }

  export type ProductDescriptionUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductDescriptionWhereUniqueInput
    data: XOR<ProductDescriptionUpdateWithoutProductInput, ProductDescriptionUncheckedUpdateWithoutProductInput>
  }

  export type ProductDescriptionUpdateManyWithWhereWithoutProductInput = {
    where: ProductDescriptionScalarWhereInput
    data: XOR<ProductDescriptionUpdateManyMutationInput, ProductDescriptionUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductDescriptionScalarWhereInput = {
    AND?: ProductDescriptionScalarWhereInput | ProductDescriptionScalarWhereInput[]
    OR?: ProductDescriptionScalarWhereInput[]
    NOT?: ProductDescriptionScalarWhereInput | ProductDescriptionScalarWhereInput[]
    id?: IntFilter<"ProductDescription"> | number
    title?: StringFilter<"ProductDescription"> | string
    description?: StringFilter<"ProductDescription"> | string
    img?: StringFilter<"ProductDescription"> | string
    productId?: IntFilter<"ProductDescription"> | number
  }

  export type OrderProductUpsertWithWhereUniqueWithoutProductInput = {
    where: OrderProductWhereUniqueInput
    update: XOR<OrderProductUpdateWithoutProductInput, OrderProductUncheckedUpdateWithoutProductInput>
    create: XOR<OrderProductCreateWithoutProductInput, OrderProductUncheckedCreateWithoutProductInput>
  }

  export type OrderProductUpdateWithWhereUniqueWithoutProductInput = {
    where: OrderProductWhereUniqueInput
    data: XOR<OrderProductUpdateWithoutProductInput, OrderProductUncheckedUpdateWithoutProductInput>
  }

  export type OrderProductUpdateManyWithWhereWithoutProductInput = {
    where: OrderProductScalarWhereInput
    data: XOR<OrderProductUpdateManyMutationInput, OrderProductUncheckedUpdateManyWithoutProductInput>
  }

  export type OrderProductScalarWhereInput = {
    AND?: OrderProductScalarWhereInput | OrderProductScalarWhereInput[]
    OR?: OrderProductScalarWhereInput[]
    NOT?: OrderProductScalarWhereInput | OrderProductScalarWhereInput[]
    id?: IntFilter<"OrderProduct"> | number
    amount?: IntFilter<"OrderProduct"> | number
    priceInPurchase?: IntFilter<"OrderProduct"> | number
    productId?: IntFilter<"OrderProduct"> | number
  }

  export type CategoryUpsertWithWhereUniqueWithoutProductInput = {
    where: CategoryWhereUniqueInput
    update: XOR<CategoryUpdateWithoutProductInput, CategoryUncheckedUpdateWithoutProductInput>
    create: XOR<CategoryCreateWithoutProductInput, CategoryUncheckedCreateWithoutProductInput>
  }

  export type CategoryUpdateWithWhereUniqueWithoutProductInput = {
    where: CategoryWhereUniqueInput
    data: XOR<CategoryUpdateWithoutProductInput, CategoryUncheckedUpdateWithoutProductInput>
  }

  export type CategoryUpdateManyWithWhereWithoutProductInput = {
    where: CategoryScalarWhereInput
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyWithoutProductInput>
  }

  export type CategoryScalarWhereInput = {
    AND?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    OR?: CategoryScalarWhereInput[]
    NOT?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    id?: IntFilter<"Category"> | number
    name?: StringFilter<"Category"> | string
  }

  export type CartsProductUpsertWithWhereUniqueWithoutProductInput = {
    where: CartsProductWhereUniqueInput
    update: XOR<CartsProductUpdateWithoutProductInput, CartsProductUncheckedUpdateWithoutProductInput>
    create: XOR<CartsProductCreateWithoutProductInput, CartsProductUncheckedCreateWithoutProductInput>
  }

  export type CartsProductUpdateWithWhereUniqueWithoutProductInput = {
    where: CartsProductWhereUniqueInput
    data: XOR<CartsProductUpdateWithoutProductInput, CartsProductUncheckedUpdateWithoutProductInput>
  }

  export type CartsProductUpdateManyWithWhereWithoutProductInput = {
    where: CartsProductScalarWhereInput
    data: XOR<CartsProductUpdateManyMutationInput, CartsProductUncheckedUpdateManyWithoutProductInput>
  }

  export type CartsProductScalarWhereInput = {
    AND?: CartsProductScalarWhereInput | CartsProductScalarWhereInput[]
    OR?: CartsProductScalarWhereInput[]
    NOT?: CartsProductScalarWhereInput | CartsProductScalarWhereInput[]
    id?: IntFilter<"CartsProduct"> | number
    amout?: IntFilter<"CartsProduct"> | number
    userId?: IntFilter<"CartsProduct"> | number
  }

  export type ProductCharacteristicUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductCharacteristicWhereUniqueInput
    update: XOR<ProductCharacteristicUpdateWithoutProductInput, ProductCharacteristicUncheckedUpdateWithoutProductInput>
    create: XOR<ProductCharacteristicCreateWithoutProductInput, ProductCharacteristicUncheckedCreateWithoutProductInput>
  }

  export type ProductCharacteristicUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductCharacteristicWhereUniqueInput
    data: XOR<ProductCharacteristicUpdateWithoutProductInput, ProductCharacteristicUncheckedUpdateWithoutProductInput>
  }

  export type ProductCharacteristicUpdateManyWithWhereWithoutProductInput = {
    where: ProductCharacteristicScalarWhereInput
    data: XOR<ProductCharacteristicUpdateManyMutationInput, ProductCharacteristicUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductCharacteristicScalarWhereInput = {
    AND?: ProductCharacteristicScalarWhereInput | ProductCharacteristicScalarWhereInput[]
    OR?: ProductCharacteristicScalarWhereInput[]
    NOT?: ProductCharacteristicScalarWhereInput | ProductCharacteristicScalarWhereInput[]
    id?: IntFilter<"ProductCharacteristic"> | number
    title?: StringFilter<"ProductCharacteristic"> | string
    description?: StringFilter<"ProductCharacteristic"> | string
    img?: StringFilter<"ProductCharacteristic"> | string
    coding?: StringFilter<"ProductCharacteristic"> | string
    ufsStorage?: IntFilter<"ProductCharacteristic"> | number
    eMMSStorage?: IntFilter<"ProductCharacteristic"> | number
    productId?: IntFilter<"ProductCharacteristic"> | number
  }

  export type ProductCreateWithoutCategoryInput = {
    title: string
    description: string
    color: string
    price: number
    discount?: number | null
    img: string
    creationDate?: Date | string
    productDescription?: ProductDescriptionCreateNestedManyWithoutProductInput
    orderProduct?: OrderProductCreateNestedManyWithoutProductInput
    cartsProduct?: CartsProductCreateNestedManyWithoutProductInput
    ProductCharacteristic?: ProductCharacteristicCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutCategoryInput = {
    id?: number
    title: string
    description: string
    color: string
    price: number
    discount?: number | null
    img: string
    creationDate?: Date | string
    productDescription?: ProductDescriptionUncheckedCreateNestedManyWithoutProductInput
    orderProduct?: OrderProductUncheckedCreateNestedManyWithoutProductInput
    cartsProduct?: CartsProductUncheckedCreateNestedManyWithoutProductInput
    ProductCharacteristic?: ProductCharacteristicUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
  }

  export type ProductUpdateManyWithWhereWithoutCategoryInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutCategoryInput>
  }

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[]
    OR?: ProductScalarWhereInput[]
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[]
    id?: IntFilter<"Product"> | number
    title?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    color?: StringFilter<"Product"> | string
    price?: IntFilter<"Product"> | number
    discount?: IntNullableFilter<"Product"> | number | null
    img?: StringFilter<"Product"> | string
    creationDate?: DateTimeFilter<"Product"> | Date | string
  }

  export type UserCreateWithoutCartsProductInput = {
    username: string
    email: string
    password: string
    isAdmin: boolean
    name?: string | null
    surname?: string | null
    middleName?: string | null
    birthday?: string | null
    phoneNumber?: string | null
    contactsMessages?: ContactsMessageCreateNestedManyWithoutUserInput
    userInfo?: UserInfoCreateNestedOneWithoutUserInput
    userOrderComment?: UserOrderCommentCreateNestedManyWithoutUserInput
    userAdress?: AdressCreateNestedManyWithoutUserInput
    order?: OrderCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCartsProductInput = {
    id?: number
    username: string
    email: string
    password: string
    isAdmin: boolean
    name?: string | null
    surname?: string | null
    middleName?: string | null
    birthday?: string | null
    phoneNumber?: string | null
    contactsMessages?: ContactsMessageUncheckedCreateNestedManyWithoutUserInput
    userInfo?: UserInfoUncheckedCreateNestedOneWithoutUserInput
    userOrderComment?: UserOrderCommentUncheckedCreateNestedManyWithoutUserInput
    userAdress?: AdressUncheckedCreateNestedManyWithoutUserInput
    order?: OrderUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCartsProductInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCartsProductInput, UserUncheckedCreateWithoutCartsProductInput>
  }

  export type ProductCreateWithoutCartsProductInput = {
    title: string
    description: string
    color: string
    price: number
    discount?: number | null
    img: string
    creationDate?: Date | string
    productDescription?: ProductDescriptionCreateNestedManyWithoutProductInput
    orderProduct?: OrderProductCreateNestedManyWithoutProductInput
    category?: CategoryCreateNestedManyWithoutProductInput
    ProductCharacteristic?: ProductCharacteristicCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutCartsProductInput = {
    id?: number
    title: string
    description: string
    color: string
    price: number
    discount?: number | null
    img: string
    creationDate?: Date | string
    productDescription?: ProductDescriptionUncheckedCreateNestedManyWithoutProductInput
    orderProduct?: OrderProductUncheckedCreateNestedManyWithoutProductInput
    category?: CategoryUncheckedCreateNestedManyWithoutProductInput
    ProductCharacteristic?: ProductCharacteristicUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutCartsProductInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutCartsProductInput, ProductUncheckedCreateWithoutCartsProductInput>
  }

  export type UserUpsertWithoutCartsProductInput = {
    update: XOR<UserUpdateWithoutCartsProductInput, UserUncheckedUpdateWithoutCartsProductInput>
    create: XOR<UserCreateWithoutCartsProductInput, UserUncheckedCreateWithoutCartsProductInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCartsProductInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCartsProductInput, UserUncheckedUpdateWithoutCartsProductInput>
  }

  export type UserUpdateWithoutCartsProductInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    contactsMessages?: ContactsMessageUpdateManyWithoutUserNestedInput
    userInfo?: UserInfoUpdateOneWithoutUserNestedInput
    userOrderComment?: UserOrderCommentUpdateManyWithoutUserNestedInput
    userAdress?: AdressUpdateManyWithoutUserNestedInput
    order?: OrderUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCartsProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    contactsMessages?: ContactsMessageUncheckedUpdateManyWithoutUserNestedInput
    userInfo?: UserInfoUncheckedUpdateOneWithoutUserNestedInput
    userOrderComment?: UserOrderCommentUncheckedUpdateManyWithoutUserNestedInput
    userAdress?: AdressUncheckedUpdateManyWithoutUserNestedInput
    order?: OrderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProductUpsertWithWhereUniqueWithoutCartsProductInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutCartsProductInput, ProductUncheckedUpdateWithoutCartsProductInput>
    create: XOR<ProductCreateWithoutCartsProductInput, ProductUncheckedCreateWithoutCartsProductInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutCartsProductInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutCartsProductInput, ProductUncheckedUpdateWithoutCartsProductInput>
  }

  export type ProductUpdateManyWithWhereWithoutCartsProductInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutCartsProductInput>
  }

  export type ProductCreateWithoutProductDescriptionInput = {
    title: string
    description: string
    color: string
    price: number
    discount?: number | null
    img: string
    creationDate?: Date | string
    orderProduct?: OrderProductCreateNestedManyWithoutProductInput
    category?: CategoryCreateNestedManyWithoutProductInput
    cartsProduct?: CartsProductCreateNestedManyWithoutProductInput
    ProductCharacteristic?: ProductCharacteristicCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutProductDescriptionInput = {
    id?: number
    title: string
    description: string
    color: string
    price: number
    discount?: number | null
    img: string
    creationDate?: Date | string
    orderProduct?: OrderProductUncheckedCreateNestedManyWithoutProductInput
    category?: CategoryUncheckedCreateNestedManyWithoutProductInput
    cartsProduct?: CartsProductUncheckedCreateNestedManyWithoutProductInput
    ProductCharacteristic?: ProductCharacteristicUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutProductDescriptionInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutProductDescriptionInput, ProductUncheckedCreateWithoutProductDescriptionInput>
  }

  export type ProductUpsertWithoutProductDescriptionInput = {
    update: XOR<ProductUpdateWithoutProductDescriptionInput, ProductUncheckedUpdateWithoutProductDescriptionInput>
    create: XOR<ProductCreateWithoutProductDescriptionInput, ProductUncheckedCreateWithoutProductDescriptionInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutProductDescriptionInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutProductDescriptionInput, ProductUncheckedUpdateWithoutProductDescriptionInput>
  }

  export type ProductUpdateWithoutProductDescriptionInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    discount?: NullableIntFieldUpdateOperationsInput | number | null
    img?: StringFieldUpdateOperationsInput | string
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    orderProduct?: OrderProductUpdateManyWithoutProductNestedInput
    category?: CategoryUpdateManyWithoutProductNestedInput
    cartsProduct?: CartsProductUpdateManyWithoutProductNestedInput
    ProductCharacteristic?: ProductCharacteristicUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutProductDescriptionInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    discount?: NullableIntFieldUpdateOperationsInput | number | null
    img?: StringFieldUpdateOperationsInput | string
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    orderProduct?: OrderProductUncheckedUpdateManyWithoutProductNestedInput
    category?: CategoryUncheckedUpdateManyWithoutProductNestedInput
    cartsProduct?: CartsProductUncheckedUpdateManyWithoutProductNestedInput
    ProductCharacteristic?: ProductCharacteristicUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateWithoutProductCharacteristicInput = {
    title: string
    description: string
    color: string
    price: number
    discount?: number | null
    img: string
    creationDate?: Date | string
    productDescription?: ProductDescriptionCreateNestedManyWithoutProductInput
    orderProduct?: OrderProductCreateNestedManyWithoutProductInput
    category?: CategoryCreateNestedManyWithoutProductInput
    cartsProduct?: CartsProductCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutProductCharacteristicInput = {
    id?: number
    title: string
    description: string
    color: string
    price: number
    discount?: number | null
    img: string
    creationDate?: Date | string
    productDescription?: ProductDescriptionUncheckedCreateNestedManyWithoutProductInput
    orderProduct?: OrderProductUncheckedCreateNestedManyWithoutProductInput
    category?: CategoryUncheckedCreateNestedManyWithoutProductInput
    cartsProduct?: CartsProductUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutProductCharacteristicInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutProductCharacteristicInput, ProductUncheckedCreateWithoutProductCharacteristicInput>
  }

  export type ProductUpsertWithoutProductCharacteristicInput = {
    update: XOR<ProductUpdateWithoutProductCharacteristicInput, ProductUncheckedUpdateWithoutProductCharacteristicInput>
    create: XOR<ProductCreateWithoutProductCharacteristicInput, ProductUncheckedCreateWithoutProductCharacteristicInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutProductCharacteristicInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutProductCharacteristicInput, ProductUncheckedUpdateWithoutProductCharacteristicInput>
  }

  export type ProductUpdateWithoutProductCharacteristicInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    discount?: NullableIntFieldUpdateOperationsInput | number | null
    img?: StringFieldUpdateOperationsInput | string
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    productDescription?: ProductDescriptionUpdateManyWithoutProductNestedInput
    orderProduct?: OrderProductUpdateManyWithoutProductNestedInput
    category?: CategoryUpdateManyWithoutProductNestedInput
    cartsProduct?: CartsProductUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutProductCharacteristicInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    discount?: NullableIntFieldUpdateOperationsInput | number | null
    img?: StringFieldUpdateOperationsInput | string
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    productDescription?: ProductDescriptionUncheckedUpdateManyWithoutProductNestedInput
    orderProduct?: OrderProductUncheckedUpdateManyWithoutProductNestedInput
    category?: CategoryUncheckedUpdateManyWithoutProductNestedInput
    cartsProduct?: CartsProductUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ContactsMessageCreateManyUserInput = {
    id?: number
    message: string
  }

  export type UserOrderCommentCreateManyUserInput = {
    id?: number
    comment: string
  }

  export type AdressCreateManyUserInput = {
    id?: number
    postDepartament: string
    street: string
    home: string
    appartament: number
    entrants: number
  }

  export type OrderCreateManyUserInput = {
    id?: number
    totalPrice: number
    status: string
    createdAt: string
    userAdressId: number
  }

  export type ContactsMessageUpdateWithoutUserInput = {
    message?: StringFieldUpdateOperationsInput | string
  }

  export type ContactsMessageUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
  }

  export type ContactsMessageUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
  }

  export type UserOrderCommentUpdateWithoutUserInput = {
    comment?: StringFieldUpdateOperationsInput | string
  }

  export type UserOrderCommentUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
  }

  export type UserOrderCommentUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
  }

  export type AdressUpdateWithoutUserInput = {
    postDepartament?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    home?: StringFieldUpdateOperationsInput | string
    appartament?: IntFieldUpdateOperationsInput | number
    entrants?: IntFieldUpdateOperationsInput | number
    order?: OrderUpdateManyWithoutUserAdressNestedInput
  }

  export type AdressUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    postDepartament?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    home?: StringFieldUpdateOperationsInput | string
    appartament?: IntFieldUpdateOperationsInput | number
    entrants?: IntFieldUpdateOperationsInput | number
    order?: OrderUncheckedUpdateManyWithoutUserAdressNestedInput
  }

  export type AdressUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    postDepartament?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    home?: StringFieldUpdateOperationsInput | string
    appartament?: IntFieldUpdateOperationsInput | number
    entrants?: IntFieldUpdateOperationsInput | number
  }

  export type OrderUpdateWithoutUserInput = {
    totalPrice?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: StringFieldUpdateOperationsInput | string
    userAdress?: AdressUpdateOneWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: StringFieldUpdateOperationsInput | string
    userAdressId?: IntFieldUpdateOperationsInput | number
  }

  export type OrderUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: StringFieldUpdateOperationsInput | string
    userAdressId?: IntFieldUpdateOperationsInput | number
  }

  export type OrderCreateManyUserAdressInput = {
    id?: number
    totalPrice: number
    status: string
    createdAt: string
    userId: number
  }

  export type OrderUpdateWithoutUserAdressInput = {
    totalPrice?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutUserAdressInput = {
    id?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type OrderUncheckedUpdateManyWithoutUserAdressInput = {
    id?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductDescriptionCreateManyProductInput = {
    id?: number
    title: string
    description: string
    img: string
  }

  export type OrderProductCreateManyProductInput = {
    id?: number
    amount: number
    priceInPurchase: number
  }

  export type ProductCharacteristicCreateManyProductInput = {
    id?: number
    title: string
    description: string
    img: string
    coding: string
    ufsStorage: number
    eMMSStorage: number
  }

  export type ProductDescriptionUpdateWithoutProductInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
  }

  export type ProductDescriptionUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
  }

  export type ProductDescriptionUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
  }

  export type OrderProductUpdateWithoutProductInput = {
    amount?: IntFieldUpdateOperationsInput | number
    priceInPurchase?: IntFieldUpdateOperationsInput | number
  }

  export type OrderProductUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    priceInPurchase?: IntFieldUpdateOperationsInput | number
  }

  export type OrderProductUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    priceInPurchase?: IntFieldUpdateOperationsInput | number
  }

  export type CategoryUpdateWithoutProductInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CartsProductUpdateWithoutProductInput = {
    amout?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutCartsProductNestedInput
  }

  export type CartsProductUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    amout?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type CartsProductUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    amout?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductCharacteristicUpdateWithoutProductInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    coding?: StringFieldUpdateOperationsInput | string
    ufsStorage?: IntFieldUpdateOperationsInput | number
    eMMSStorage?: IntFieldUpdateOperationsInput | number
  }

  export type ProductCharacteristicUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    coding?: StringFieldUpdateOperationsInput | string
    ufsStorage?: IntFieldUpdateOperationsInput | number
    eMMSStorage?: IntFieldUpdateOperationsInput | number
  }

  export type ProductCharacteristicUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    coding?: StringFieldUpdateOperationsInput | string
    ufsStorage?: IntFieldUpdateOperationsInput | number
    eMMSStorage?: IntFieldUpdateOperationsInput | number
  }

  export type ProductUpdateWithoutCategoryInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    discount?: NullableIntFieldUpdateOperationsInput | number | null
    img?: StringFieldUpdateOperationsInput | string
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    productDescription?: ProductDescriptionUpdateManyWithoutProductNestedInput
    orderProduct?: OrderProductUpdateManyWithoutProductNestedInput
    cartsProduct?: CartsProductUpdateManyWithoutProductNestedInput
    ProductCharacteristic?: ProductCharacteristicUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    discount?: NullableIntFieldUpdateOperationsInput | number | null
    img?: StringFieldUpdateOperationsInput | string
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    productDescription?: ProductDescriptionUncheckedUpdateManyWithoutProductNestedInput
    orderProduct?: OrderProductUncheckedUpdateManyWithoutProductNestedInput
    cartsProduct?: CartsProductUncheckedUpdateManyWithoutProductNestedInput
    ProductCharacteristic?: ProductCharacteristicUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    discount?: NullableIntFieldUpdateOperationsInput | number | null
    img?: StringFieldUpdateOperationsInput | string
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUpdateWithoutCartsProductInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    discount?: NullableIntFieldUpdateOperationsInput | number | null
    img?: StringFieldUpdateOperationsInput | string
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    productDescription?: ProductDescriptionUpdateManyWithoutProductNestedInput
    orderProduct?: OrderProductUpdateManyWithoutProductNestedInput
    category?: CategoryUpdateManyWithoutProductNestedInput
    ProductCharacteristic?: ProductCharacteristicUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutCartsProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    discount?: NullableIntFieldUpdateOperationsInput | number | null
    img?: StringFieldUpdateOperationsInput | string
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    productDescription?: ProductDescriptionUncheckedUpdateManyWithoutProductNestedInput
    orderProduct?: OrderProductUncheckedUpdateManyWithoutProductNestedInput
    category?: CategoryUncheckedUpdateManyWithoutProductNestedInput
    ProductCharacteristic?: ProductCharacteristicUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutCartsProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    discount?: NullableIntFieldUpdateOperationsInput | number | null
    img?: StringFieldUpdateOperationsInput | string
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}