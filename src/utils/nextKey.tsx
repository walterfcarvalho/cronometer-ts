export const nextKey = (tsk: ITask) => {
  let count = 1;

  tsk.nodes.forEach(group => {
    group.nodes?.forEach(() => ++count);
    ++count
  })
  return ++count
}
