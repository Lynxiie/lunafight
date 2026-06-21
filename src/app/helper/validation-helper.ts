import {SchemaPath, validate} from '@angular/forms/signals';

export function url(path: SchemaPath<string>, options?: {message?: string}) {
  validate(path, ({value}) => {
    try {
      new URL(value());
      return null;
    } catch {
      return {
        kind: 'url',
        message: options?.message || "L'URL n'est pas valide",
      };
    }
  });
}

export function stage(path: SchemaPath<string>, options?: {message?: string}) {
  validate(path, ({value}) => {
    const stage_number = Number(value);

    if (-6 > stage_number || stage_number > 6) {
      return {
        kind: 'stage',
        message: options?.message || "Valeur du cran invalide",
      };
    }
    return null;
  });
}
