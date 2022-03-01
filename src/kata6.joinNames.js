const joinNames = namesObj => {
    return namesObj.map(function(elem){
        return elem.name;
    }).join(', ').replace(/, ([^,]*)$/, ' & $1')
};

module.exports = joinNames;
