export class Permission {
  key: string;
  value: string;
  discription?: string;

  constructor(obj: any) {
    this.key = obj.key ? obj.key : '';
    this.value = obj.value ? obj.value : '';
    this.discription = obj.discription;
  }

  public equail(obj: Permission): boolean {
    return obj.value === this.value;
  }
}