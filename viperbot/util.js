export function assertPermission(member, permission, command = undefined) {
  if(!member.hasPermission(permission))
    throw `Insufficient permissions to perform command${(command && ' `' + command + '`') ?? ''}.`
}

export function assertArgCount(args, count, command = undefined) {
  if(args.length != count)
    throw `Expected ${count} argument(s)${(command && ' for command `' + command + '`') ?? ''}, got ${args.length}.`
}

export function assertArgCountAtLeast(args, count, command = undefined) {
  if(args.length < count)
    throw `Expected at least ${count} argument(s)${(command && ' for command `' + command + '`') ?? ''}, got ${args.length}.`
}

export function assertArgCountBetween(args, min, max, command = undefined) {
  if(args.length < min || args.length > max)
    throw `Expected ${min}-${max} arguments${(command && ' for command `' + command + '`') ?? ''}, got ${args.length}.`
}

export function asNumber(value, command = undefined) {
  let number = parseInt(value, 10)
  if(isNaN(number))
    throw `Expected a number${(command && ' for command `' + command + '`') ?? ''}, got \`${value}\`.`
  return number
}

export function asUser(client, mention, command = undefined) {
	const matches = mention.match(/^<@!?(\d+)>$/);
	if (!matches) throw `Expected a user mention${(command && ' for command `' + command + '`') ?? ''}, got \`${value}\`.`
	return client.users.cache.get(matches[1]);
}

export function randomItem(array) {
  return array[Math.floor(Math.random() * array.length)]
}

export function clamp(number, min, max) {
  return Math.min(Math.max(number, min), max);
}

export function aliasFor(command) {
  return data => data.bot.commands[command](data)
}

export function respond(response) {
  return data => data.message.channel.send(response)
}