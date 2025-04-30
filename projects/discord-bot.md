# Personal Discord Bot

I have a Python bot for <a href="https://discord.com/" target="_blank">Discord</a> that provides a few utilities.
<br>
The source code for this project is availble on
[GitHub](https://github.com/IceMoonMagic/DiscordVCLogger)
and licensed under the
[MIT License](https://github.com/IceMoonMagic/DiscordVCLogger/blob/master/LICENSE).

## Voice State Logging

Discord plays a sound when another member joins or leaves a channel, but it gives no indication of
_who_ it was that just joined or left. This records members' voice state updates which can then be queried.
The internal logs are cleared when the voice channel becomes empty.

## Fix Links

In Discord, when a link is posted from [<strike>Twitter</strike> X](https://x.com),
it produces an embed with the content of the <strike>tweet</strike> post(?).
However, a good chunk of the time, the embed doesn't properly work with images and videos.
There are sites that can create a better embed, with the url staying mostly the same besides the domain.
This just adds a quick command that modifies the link to one of those sites.

It's implemented primarily for <strike>Twitter</strike> X,
but it can be configured to do any other basic string replacement.

## Free Epic Games

Every week, the [Epic Games Store](https://store.epicgames.com/)
makes a few games free to permanently add to your library.
However, I tend to forget to check every week,
so this posts whatever games are free for the week.
