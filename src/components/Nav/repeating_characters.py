def first_not_repeating_character(s):
    order_char = []
    // #create an empty array
    ctrs = {}
    // #create an empty dictionary to hold characers
    for x in s:
    // loop through the cache
        if x in ctrs:
        # // if item in empty dictionary 
            ctrs[x] += 1
            # // count the times the letter shows up
        else:
            ctrs[x] = 1
            # // else if there's one item in dictionary
            order_char.append(x)
            // # append that item to the empty array
    for x in order_char:
    # // loop through array
        if ctrs[x] == 1:
            return x
        # // if array of objects is equal to 1 return that item
    return "_"
    // # if there are no lone letter return _


    yeah sorry, basically what mine said was like 
    I need to start a dict to hold the letters, and loop through 
    that cache counting the times the letter shoes up, and then if a 
    letter has a 1 with it, and the next one has a 2 that means the 
    first 1 will be appended to the new array
I think I don't have the exact psuedocode/code in front of me
but that wa the gist of it