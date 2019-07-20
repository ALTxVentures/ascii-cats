var tap = require('tap')

var asciiCats = require('./')

tap.test('returns a cat at random', function (t) {
  t.plan(1)
  var cat = asciiCats()
  t.equal(typeof cat, 'string', 'does it')
  console.log(cat)
})

var tubs = '  /\\ ___ /\\' + '\n' +
' (  o   o  )' + '\n' +
'  \\  >#<  /' + '\n' +
'  /       \\' + '\n' +
' /         \\       ^' + '\n' +
'|           |     //' + '\n' +
' \\         /    //' + '\n' +
'  ///  ///   --'

tap.test('returns a specific cat', function (t) {
  t.plan(1)
  var cat = asciiCats('tubby')
  t.equal(cat, tubs, 'does it')
  console.log(cat)
})

tap.test('returns a list of cat names', function (t) {
  t.plan(1)
  var catNames = asciiCats.catNames
  t.ok(catNames.indexOf('grumpy') !== -1, 'does it')
})
