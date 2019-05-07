/**
* Provides a `Demand` object
*/
export class Demand
{
  constructor(
    public id: number,
    public date: string,
    public user: string,
    public description: string) {}
}
