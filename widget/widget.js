scope.onData = function(data) {
  element.find(".lastData").html(data.DA);
};

var firstDevice = _.find(scope.Widget.devices, function(device) { return true; });

element.find(".title").html(firstDevice.shortName);
element.find(".node").html(firstDevice.node);
element.find(".deviceId").html(firstDevice.did);
element.find(".vendorId").html(firstDevice.vid);
element.find(".group").html(firstDevice.gid);
element.find(".lastData").html(firstDevice.last_data.DA);

scope.Widget.settings.name = firstDevice.shortName;