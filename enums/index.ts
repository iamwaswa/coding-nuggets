export enum ApiBaseUrl {
  DEVELOPMENT = '',
  PRODUCTION = '',
}

export enum ApiMethod {
  GET = 'GET',
  PUT = 'PUT',
  POST = 'POST',
  DELETE = 'DELETE',
}

export enum AuthorizationStatus {
  IDLE,
  AUTHORIZED,
  NOT_AUTHORIZED,
}

export enum DatabaseErrorCode {
  DOCUMENT_ALREADY_EXISTS = 'Document already exists',
  NON_EXISTENT_DOCUMENT = 'Non existent document',
}

export enum Direction {
  LTR = 'ltr',
  RTL = 'rtl',
}

export enum ThemeState {
  DARK = 'dark',
  LIGHT = 'light',
}
