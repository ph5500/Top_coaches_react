function uncover_spy (n, trust) {
  const people = []
  for (let i = 0; i < n; i++) {
    //   for loop to increment through i when it's less than n (population)
    people.push(i + 1)
    // add to people
  }
  //[1,2]
  const potentialSpies = []
  //   set potential spies to empty array
  for (let i = 0; i < people.length; i++) {
    //   loop through as long as  i is less than length of items in people array
    const person = people[i]
    // set person to be an array of array [[1,3]]
    console.log('Checking person : ', person)
    //2
    let doesNotTrustAnyoneElse = true
    // set doesNotTrustAnyoneElse to true
    for (let k = 0; k < trust.length; k++) {
      // loop through length of trust array
      const trustObj = trust[k]
      //   set trust object = trust array
      //[1,2]
      const firstIndex = trustObj[0]
      //    set first index = first index of trustObj i.e [1]
      //1
      if (person === firstIndex) {
        // if person(spy) is equal to the firstIndex
        doesNotTrustAnyoneElse = false
        // person can't be the spy
        // so set doesNotTrustAnyoneElse to false
        console.log('Does not trust anyone else false')
        break
      }
    }
    //3
    if (doesNotTrustAnyoneElse) {
      // if doesn't trust anyone else. could be a spy
      let doesEveryoneTrust = true
      //   set everyone trusts equal to true.
      for (let p = 0; p < people.length; p++) {
        //   loop through the length of people
        const otherPerson = people[p]
        // otherperson equal to people or non spy ??
        //2
        if (otherPerson !== person) {
          //
          let doesOtherPersonTrustPerson = false
          for (let k = 0; k < trust.length; k++) {
            const trustObj = trust[k]
            //[1,2]
            if (otherPerson === trustObj[0] && person === trustObj[1]) {
              // if otherperson is equal to first index of trustObj and person is equal to second index of trustObj
              doesOtherPersonTrustPerson = true
              //   doesOtherPersonTrustPerson is true
              break
            }
          }
          if (doesOtherPersonTrustPerson === false) {
            //   if doesOtherPersonTrustPerson is false
            doesEveryoneTrust = false
            //  everyone does not trust person
            console.log('Does everyone trust false')
            break
          }
        }
      }
      if (doesEveryoneTrust) {
        //   if everyone does trust person
        potentialSpies.push(person)
        // add person to potentialSpies array
      }
    }
  }
  if (potentialSpies.length === 1) {
    //   if length of potential spies is 1, return that item in the array
    return potentialSpies[0]
  }
  console.log('potential spies: ', potentialSpies)
  return -1
  //   else return -1
}
