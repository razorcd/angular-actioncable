## edge

Features:
  - Officially support Rails 5.0.0.rc1

## 1.0.0-beta2  First release

Bugfixes:
  - "1.0.0.beta1" does not validate http://semver.org/spec/v2.0.0.html

## 1.0.0.beta1  Properties are not functions

Features:
  - Officially support Rails 5.0.0.beta4
  - Add unit tests around ActionCableSocketWrangler properties

BREAKING CHANGES:
  - Update `ActionCableSocketWrangler.connected()` => `ActionCableSocketWrangler.connected`
  - Update `ActionCableSocketWrangler.connecting()` => `ActionCableSocketWrangler.connecting`
  - Update `ActionCableSocketWrangler.disconnected()` => `ActionCableSocketWrangler.disconnected`

## 0.0.7  Run digest loop after connection changes

Bugfixes:
  - updates UI bindings by running a digest loop when connection changes

## 0.0.6  Autostart when injected

Bugfixes:
  - Fix missing autostart initiator

## 0.0.5  Add timeout if no pings have been received

Bugfixes:
  - Starts reconnect attempts when pings stop

## 0.0.4  Backport support for Rails 5.0.0.beta3

Features:
  - Add compatibility for another ping type

## 0.0.3  Add debug setting

Bugfixes:
  - Respect debug setting

## 0.0.2  Adds Promises

Features:
  - Promises

## 0.0.1  Initial release

  - Extract from private project
  - add FOSS license
