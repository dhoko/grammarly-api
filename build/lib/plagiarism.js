"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = __importDefault(require("node-fetch"));
const auth_1 = require("./auth");
const connection_1 = require("./connection");
function getPlagiarismHostOrigin() {
    return {
        Host: 'capi.grammarly.com',
        Origin: 'https://www.grammarly.com'
    };
}
exports.getPlagiarismHostOrigin = getPlagiarismHostOrigin;
/**
 * Free Plagiarism Checker
 *
 *
 * @author Stewart McGown
 */
function plagiarism(text, agent) {
    return __awaiter(this, void 0, void 0, function* () {
        const { Host, Origin } = getPlagiarismHostOrigin();
        const auth = yield auth_1.buildAuth({
            origin: Origin,
            host: 'www.grammarly.com',
            authUrl: 'https://www.grammarly.com/plagiarism-checker',
            agent
        });
        const results = yield node_fetch_1.default('https://capi.grammarly.com/api/check', {
            method: 'POST',
            headers: auth_1.buildAuthHeaders(connection_1.buildCookieString(auth_1.getAuthCookies(auth)), auth.gnar_containerId, Origin, Host),
            body: text,
            agent
        }).then(r => r.json());
        const detected = results.find(r => r.category === 'Plagiarism' || r.group === 'Plagiarism') || {
            count: 0
        };
        // Extract plagiarism
        return Object.assign({}, detected, { text, hasPlagiarism: !!detected.count });
    });
}
exports.plagiarism = plagiarism;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhZ2lhcmlzbS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvcGxhZ2lhcmlzbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsNERBQStCO0FBQy9CLGlDQUtnQjtBQUNoQiw2Q0FBaUQ7QUFjakQsU0FBZ0IsdUJBQXVCO0lBQ3JDLE9BQU87UUFDTCxJQUFJLEVBQUUsb0JBQW9CO1FBQzFCLE1BQU0sRUFBRSwyQkFBMkI7S0FDcEMsQ0FBQztBQUNKLENBQUM7QUFMRCwwREFLQztBQUVEOzs7OztHQUtHO0FBQ0gsU0FBc0IsVUFBVSxDQUFDLElBQVksRUFBRSxLQUF3Qzs7UUFDckYsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsR0FBRyx1QkFBdUIsRUFBRSxDQUFDO1FBRW5ELE1BQU0sSUFBSSxHQUFHLE1BQU0sZ0JBQVMsQ0FBQztZQUMzQixNQUFNLEVBQUUsTUFBTTtZQUNkLElBQUksRUFBRSxtQkFBbUI7WUFDekIsT0FBTyxFQUFFLDhDQUE4QztZQUN2RCxLQUFLO1NBQ04sQ0FBQyxDQUFDO1FBRUgsTUFBTSxPQUFPLEdBQTZCLE1BQU0sb0JBQUssQ0FDbkQsc0NBQXNDLEVBQ3RDO1lBQ0UsTUFBTSxFQUFFLE1BQU07WUFDZCxPQUFPLEVBQUUsdUJBQWdCLENBQ3ZCLDhCQUFpQixDQUFDLHFCQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsRUFDdkMsSUFBSSxDQUFDLGdCQUFnQixFQUNyQixNQUFNLEVBQ04sSUFBSSxDQUNMO1lBQ0QsSUFBSSxFQUFFLElBQUk7WUFDVixLQUFLO1NBQ04sQ0FDRixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBRXRCLE1BQU0sUUFBUSxHQUEyQixPQUFPLENBQUMsSUFBSSxDQUNuRCxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLEtBQUssWUFBWSxJQUFJLENBQUMsQ0FBQyxLQUFLLEtBQUssWUFBWSxDQUM3RCxJQUFJO1lBQ0gsS0FBSyxFQUFFLENBQUM7U0FDVCxDQUFDO1FBRUYscUJBQXFCO1FBQ3JCLHlCQUNLLFFBQVEsSUFDWCxJQUFJLEVBQ0osYUFBYSxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxJQUMvQjtJQUNKLENBQUM7Q0FBQTtBQXJDRCxnQ0FxQ0MifQ==