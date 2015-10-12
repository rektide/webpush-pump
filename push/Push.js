var
  base= require( "../base"),
  classiness= require( "insure-classiness"),
  util= require( "util")

function Push( opts){
	var self= classiness( this, Push, [ opts])
	self.subscribe= self.subscribe|| opts.subscribe
	if( !self.subscribe){
		throw new Error("Depends on a subscribe")
	}
	return self
}
util.inherits( Push, base)


Push.prototype[ "@type"]= Push.name.toLowerCase()
Push.prototype.subscribe= null
Push.prototype.created= null
Push.prototype.id= null
Push.prototype.symbol= null

module.exports= Push
module.exports.Push= Push
