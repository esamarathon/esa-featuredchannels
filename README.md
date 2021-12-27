# esa-featuredchannels

**This bundle should only be used if you were directed here to specifically use it.**

> NodeCG bundle used alongside nodecg-speedcontrol to set featured channels on the ESAMarathon channel.

*This is a bundle for [NodeCG](https://nodecg.dev); if you do not understand what that is, we advise you read their website first for more information.*

## Installation

This is a [NodeCG](https://nodecg.dev) v1.8.1 bundle. You will need to have NodeCG v1.8.1 or above installed to run it. It also requires you to install the [nodecg-speedcontrol](https://github.com/speedcontrol/nodecg-speedcontrol) bundle (at least v2.2.0).

Install this bundle just like any other NodeCG bundle; if you have `nodecg-cli` you can:
- Use `nodecg install esamarathon/esa-featuredchannels`, then...
- Do `nodecg defaultconfig featuredchannels` to generate a default configuration file.

If not obvious, you must be logged into/authorised with Twitch in the `nodecg-speedcontrol` bundle to be able to change featured channels.

You must also set the `channelName` setting in your `nodecg-speedcontrol` Twitch configuration to "esamarathon" (if not done already), `ffzIntegration` to `true` (if not done already) and `ffzUseRepeater` to `true`. See [the relevant README](https://github.com/speedcontrol/nodecg-speedcontrol/blob/master/READMES/Configuration.md#twitch) for more information.

## Configuration

```json
{
  "address": "app.esamarathon.com/fcb",
  "postKey": "POST_KEY"
}
```

- `address`: Address to the external server that will be used; only change this if requested.
- `postKey`: Key used to authenticate your changes; will be supplied to you.

## Usage

Featured channels will be set by this extension instead of `nodecg-speedcontrol` (if configured as above), you don't need to do anything extra.
