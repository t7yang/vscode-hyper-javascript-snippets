export type JsonCreator = <T extends Record<string, any> | Array<any>>(
  obj: T,
  doc: 'PackageJson' | 'Snippet',
) => string;
