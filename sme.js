let c = document.querySelector("#rso > div:nth-child(1) > div > div.kp-blk.Wnoohf.OJXvsb > div > div.ifM9O > div > div > div > g-lightbox > div.ynlwjd.VDgVie.qzMpzb.u98ib > div.AU64fe.zsYMMe.TUOsUe > span > div > div.jNB0Ic > canvas");
let fc = document.createElement("canvas");
c.drawImage = function (arguments) {
  alert("drawn")
  fc.drawImage.apply(null, arguments);
}

c.fillRect = function (arguments) {
  alert("drawn")
  fc.fillRect.apply(null, arguments);
}

c.replaceWith(fc)
