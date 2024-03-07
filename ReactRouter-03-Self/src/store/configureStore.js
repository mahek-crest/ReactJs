
export default () => {
  return createRoutesFromChildren(
    combineReducers({
      entries: entriesReucer
    })
  )
}