export class CompanyPersonModel {
  id: number;
  name: string;
  jobTitle: string;
  image: string;
  link: string;

  constructor(id: number, name: string, jobTitle: string, image: string, link: string) {
    this.id = id;
    this.name = name;
    this.jobTitle = jobTitle;
    this.image = image;
    this.link = link;
  }
}