

export const addPart = (item) => {
  return {type:'ADD_PART',
payload: item}
}

export const removePart = (item) => {
  return {type:'REMOVE_PART',
payload: item}
}
