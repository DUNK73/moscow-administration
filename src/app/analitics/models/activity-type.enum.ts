export enum ActivityType {
  apk = 0,
  prom = 1
}

export class ActivityTypeMapper {
  public static getLabel(type: ActivityType): 'АПК' | 'ПРОМ' {
    switch (+type) {
      case ActivityType.apk:
        return 'АПК';
        break;

      case ActivityType.prom:
        return 'ПРОМ';
        break;
    }

    return undefined;
  }
}
