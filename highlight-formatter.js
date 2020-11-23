function run(input, parameters) {
  let internalText = String(input);

  internalText_changed = "[#scripture^^" + internalText + "^^]";

  return internalText_changed;
}
