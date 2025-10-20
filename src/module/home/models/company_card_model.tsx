export class CompanyCardModel {
  id: number;
  icon: string;
  color: string;
  shadowColor: string;
  title: string;
  description: string;

  constructor(id: number, icon: string, color: string, shadowColor: string, title: string, description: string) {
    this.id = id;
    this.icon = icon;
    this.color = color;
    this.title = title;
    this.shadowColor = shadowColor;
    this.description = description;
  }
}