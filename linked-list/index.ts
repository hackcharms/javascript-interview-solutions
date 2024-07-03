import LinkList from "./linkedList";
export function test() {
  // const lList = new LinkList(10);
  //  console.log('LinkList log1 \n',lList,
  //     '\n last node=> \n'
  //     ,lList.lastNode(),'\n')
  const lList2 = new LinkList(2);
  lList2.append(4);
  lList2.append(6);
  lList2.append(8);
  lList2.append(10);
  //  lList2.append(8);
  // lList2.print();
  //  lList2.delete(0,2);
  // lList2.append(999, 4);
  // console.log("nth node", lList2.nthNode(1));
  // console.log(lList2);
  // const listItr = lList2.iterate();
  // console.log(listItr.next());
  // console.log(listItr.next());
  // console.dir("lList2", lList2);
  lList2.createCircleFromLast(1);
  console.dir(lList2, { depth: null });
  console.log("lList2.hasCircle()", lList2.hasCircle(true));
  console.log("lList2.hasCircle()", lList2.hasCircle());
  lList2.print();
  // console.log(lList2,lList2.length())
  // console.log(listItr.next(),listItr.next(),listItr.next())
}
