export interface IRegularList {
  items: any[];
  resouceName: string;
  itemComponent: any;
}

const RegularList = ({
  items,
  resouceName,
  itemComponent: ItemComponent,
}: IRegularList) => {
  return (
    <>
      {items.map((item: any, index: number) => (
        <ItemComponent key={index} {...{ [resouceName]: item }} />
      ))}
    </>
  );
};

export default RegularList;
