"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const needle_1 = __importDefault(require("needle"));
const speedcontrol_util_1 = __importDefault(require("speedcontrol-util"));
const nodecg_1 = require("./util/nodecg");
const config = nodecg_1.get().bundleConfig;
const sc = new speedcontrol_util_1.default(nodecg_1.get());
// Used to update the featured channels on the bridge running on an external server.
function setChannels(usernames) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const resp = yield needle_1.default('post', `https://${config.address}/featured_channels?key=${config.postKey}`, JSON.stringify({
                channels: usernames,
            }), {
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                },
            });
            if (resp.statusCode === 200) {
                nodecg_1.get().log.info('[FCB] Successfully sent channels');
            }
            else {
                nodecg_1.get().log.warn('[FCB] Failed to send channels (%s)', resp.statusCode);
            }
        }
        catch (err) {
            nodecg_1.get().log.warn('[FCB] Failed to send channels');
            nodecg_1.get().log.debug('[FCB] Failed to send channels', err);
        }
    });
}
sc.listenFor('repeaterFeaturedChannels', setChannels);
