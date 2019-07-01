import { Exclude, Expose } from 'class-transformer';

@Exclude()
export default class HomePage {

  @Expose()
  public sideWidth: number | undefined;

  @Expose()
  public routers: string[] | undefined;
}
