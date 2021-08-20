"use strict";
/* inc_lang.h */
Object.defineProperty(exports, "__esModule", { value: true });
exports.lang = exports.e_translate = void 0;
var e_translate;
(function (e_translate) {
    /* common: professions */
    e_translate[e_translate["LANG_COMMON_PROF"] = 100] = "LANG_COMMON_PROF";
    e_translate[e_translate["LANG_COMMON_PROF_GUARDIAN"] = 101] = "LANG_COMMON_PROF_GUARDIAN";
    e_translate[e_translate["LANG_COMMON_PROF_DRAGONHUNTER"] = 102] = "LANG_COMMON_PROF_DRAGONHUNTER";
    e_translate[e_translate["LANG_COMMON_PROF_WARRIOR"] = 103] = "LANG_COMMON_PROF_WARRIOR";
    e_translate[e_translate["LANG_COMMON_PROF_BERSERKER"] = 104] = "LANG_COMMON_PROF_BERSERKER";
    e_translate[e_translate["LANG_COMMON_PROF_ENGINEER"] = 105] = "LANG_COMMON_PROF_ENGINEER";
    e_translate[e_translate["LANG_COMMON_PROF_SCRAPPER"] = 106] = "LANG_COMMON_PROF_SCRAPPER";
    e_translate[e_translate["LANG_COMMON_PROF_RANGER"] = 107] = "LANG_COMMON_PROF_RANGER";
    e_translate[e_translate["LANG_COMMON_PROF_DRUID"] = 108] = "LANG_COMMON_PROF_DRUID";
    e_translate[e_translate["LANG_COMMON_PROF_THIEF"] = 109] = "LANG_COMMON_PROF_THIEF";
    e_translate[e_translate["LANG_COMMON_PROF_DAREDEVIL"] = 110] = "LANG_COMMON_PROF_DAREDEVIL";
    e_translate[e_translate["LANG_COMMON_PROF_ELEMENTALIST"] = 111] = "LANG_COMMON_PROF_ELEMENTALIST";
    e_translate[e_translate["LANG_COMMON_PROF_TEMPEST"] = 112] = "LANG_COMMON_PROF_TEMPEST";
    e_translate[e_translate["LANG_COMMON_PROF_MESMER"] = 113] = "LANG_COMMON_PROF_MESMER";
    e_translate[e_translate["LANG_COMMON_PROF_CHRONOMANCER"] = 114] = "LANG_COMMON_PROF_CHRONOMANCER";
    e_translate[e_translate["LANG_COMMON_PROF_NECROMANCER"] = 115] = "LANG_COMMON_PROF_NECROMANCER";
    e_translate[e_translate["LANG_COMMON_PROF_REAPER"] = 116] = "LANG_COMMON_PROF_REAPER";
    e_translate[e_translate["LANG_COMMON_PROF_RECKONER"] = 117] = "LANG_COMMON_PROF_RECKONER";
    e_translate[e_translate["LANG_COMMON_PROF_HERALD"] = 118] = "LANG_COMMON_PROF_HERALD";
    e_translate[e_translate["LANG_COMMON_PROF_FIREBRAND"] = 119] = "LANG_COMMON_PROF_FIREBRAND";
    e_translate[e_translate["LANG_COMMON_PROF_SPELLBREAKER"] = 120] = "LANG_COMMON_PROF_SPELLBREAKER";
    e_translate[e_translate["LANG_COMMON_PROF_HOLOSMITH"] = 121] = "LANG_COMMON_PROF_HOLOSMITH";
    e_translate[e_translate["LANG_COMMON_PROF_SOULBEAST"] = 122] = "LANG_COMMON_PROF_SOULBEAST";
    e_translate[e_translate["LANG_COMMON_PROF_DEADEYE"] = 123] = "LANG_COMMON_PROF_DEADEYE";
    e_translate[e_translate["LANG_COMMON_PROF_WEAVER"] = 124] = "LANG_COMMON_PROF_WEAVER";
    e_translate[e_translate["LANG_COMMON_PROF_MIRAGE"] = 125] = "LANG_COMMON_PROF_MIRAGE";
    e_translate[e_translate["LANG_COMMON_PROF_SCOURGE"] = 126] = "LANG_COMMON_PROF_SCOURGE";
    e_translate[e_translate["LANG_COMMON_PROF_RENEGADE"] = 127] = "LANG_COMMON_PROF_RENEGADE";
    /* common: skill itemization */
    e_translate[e_translate["LANG_COMMON_SKILLS_TOTAL"] = 130] = "LANG_COMMON_SKILLS_TOTAL";
    e_translate[e_translate["LANG_COMMON_SKILLS_H"] = 131] = "LANG_COMMON_SKILLS_H";
    e_translate[e_translate["LANG_COMMON_SKILLS_F"] = 132] = "LANG_COMMON_SKILLS_F";
    e_translate[e_translate["LANG_COMMON_SKILLS_ACTIVATIONS"] = 133] = "LANG_COMMON_SKILLS_ACTIVATIONS";
    e_translate[e_translate["LANG_COMMON_SKILLS_CANCELS"] = 134] = "LANG_COMMON_SKILLS_CANCELS";
    e_translate[e_translate["LANG_COMMON_SKILLS_WASTED"] = 135] = "LANG_COMMON_SKILLS_WASTED";
    e_translate[e_translate["LANG_COMMON_SKILLS_HITSCOMPRESS"] = 136] = "LANG_COMMON_SKILLS_HITSCOMPRESS";
    e_translate[e_translate["LANG_COMMON_SKILLS_HITSTOTAL"] = 137] = "LANG_COMMON_SKILLS_HITSTOTAL";
    e_translate[e_translate["LANG_COMMON_SKILLS_NINETY"] = 138] = "LANG_COMMON_SKILLS_NINETY";
    e_translate[e_translate["LANG_COMMON_SKILLS_FIFTY"] = 139] = "LANG_COMMON_SKILLS_FIFTY";
    e_translate[e_translate["LANG_COMMON_SKILLS_MOVING"] = 140] = "LANG_COMMON_SKILLS_MOVING";
    e_translate[e_translate["LANG_COMMON_SKILLS_FLANKING"] = 141] = "LANG_COMMON_SKILLS_FLANKING";
    e_translate[e_translate["LANG_COMMON_SKILLS_CRITS"] = 142] = "LANG_COMMON_SKILLS_CRITS";
    e_translate[e_translate["LANG_COMMON_SKILLS_VALUE"] = 143] = "LANG_COMMON_SKILLS_VALUE";
    e_translate[e_translate["LANG_COMMON_SKILLS_MIN"] = 144] = "LANG_COMMON_SKILLS_MIN";
    e_translate[e_translate["LANG_COMMON_SKILLS_AVG"] = 145] = "LANG_COMMON_SKILLS_AVG";
    e_translate[e_translate["LANG_COMMON_SKILLS_MAX"] = 146] = "LANG_COMMON_SKILLS_MAX";
    e_translate[e_translate["LANG_COMMON_SKILLS_APXDMG"] = 147] = "LANG_COMMON_SKILLS_APXDMG";
    e_translate[e_translate["LANG_COMMON_SKILLS_OVERSTACK"] = 148] = "LANG_COMMON_SKILLS_OVERSTACK";
    e_translate[e_translate["LANG_COMMON_SKILLS_NOSKILLS"] = 149] = "LANG_COMMON_SKILLS_NOSKILLS";
    e_translate[e_translate["LANG_COMMON_SKILLS_REMOVED"] = 150] = "LANG_COMMON_SKILLS_REMOVED";
    e_translate[e_translate["LANG_COMMON_SKILLS_RESISTED"] = 151] = "LANG_COMMON_SKILLS_RESISTED";
    e_translate[e_translate["LANG_COMMON_SKILLS_GLANCE"] = 152] = "LANG_COMMON_SKILLS_GLANCE";
    e_translate[e_translate["LANG_COMMON_SKILLS_MISSES"] = 153] = "LANG_COMMON_SKILLS_MISSES";
    e_translate[e_translate["LANG_COMMON_SKILLS_NOTARGETS"] = 154] = "LANG_COMMON_SKILLS_NOTARGETS";
    /* common: generic */
    e_translate[e_translate["LANG_COMMON_ATT_HEADER"] = 155] = "LANG_COMMON_ATT_HEADER";
    e_translate[e_translate["LANG_COMMON_ATT_HOSTILE"] = 156] = "LANG_COMMON_ATT_HOSTILE";
    e_translate[e_translate["LANG_COMMON_ATT_FRIENDLY"] = 157] = "LANG_COMMON_ATT_FRIENDLY";
    e_translate[e_translate["LANG_COMMON_DATATYPE_HEADER"] = 160] = "LANG_COMMON_DATATYPE_HEADER";
    e_translate[e_translate["LANG_COMMON_DATATYPE_COMBAT"] = 161] = "LANG_COMMON_DATATYPE_COMBAT";
    e_translate[e_translate["LANG_COMMON_DATATYPE_ACTIVE"] = 162] = "LANG_COMMON_DATATYPE_ACTIVE";
    e_translate[e_translate["LANG_COMMON_DIRECTION_HEADER"] = 165] = "LANG_COMMON_DIRECTION_HEADER";
    e_translate[e_translate["LANG_COMMON_DIRECTION_OUTGOING"] = 166] = "LANG_COMMON_DIRECTION_OUTGOING";
    e_translate[e_translate["LANG_COMMON_DIRECTION_INCOMING"] = 167] = "LANG_COMMON_DIRECTION_INCOMING";
    e_translate[e_translate["LANG_COMMON_DATASTYLE_HEADER"] = 170] = "LANG_COMMON_DATASTYLE_HEADER";
    e_translate[e_translate["LANG_COMMON_DATASTYLE_PERSECOND"] = 171] = "LANG_COMMON_DATASTYLE_PERSECOND";
    e_translate[e_translate["LANG_COMMON_DATASTYLE_TOTAL"] = 172] = "LANG_COMMON_DATASTYLE_TOTAL";
    e_translate[e_translate["LANG_COMMON_DATASTYLE_PERCENT"] = 173] = "LANG_COMMON_DATASTYLE_PERCENT";
    /* panels: dps */
    e_translate[e_translate["LANG_PAN_PERSONALDPS_HEADER"] = 200] = "LANG_PAN_PERSONALDPS_HEADER";
    e_translate[e_translate["LANG_PAN_PERSONALDPS_OUT"] = 201] = "LANG_PAN_PERSONALDPS_OUT";
    e_translate[e_translate["LANG_PAN_PERSONALDPS_IN"] = 202] = "LANG_PAN_PERSONALDPS_IN";
    e_translate[e_translate["LANG_PAN_PERSONALDPS_CBT"] = 203] = "LANG_PAN_PERSONALDPS_CBT";
    e_translate[e_translate["LANG_PAN_PERSONALDPS_ACT"] = 204] = "LANG_PAN_PERSONALDPS_ACT";
    e_translate[e_translate["LANG_PAN_PERSONALDPS_DAMAGE"] = 205] = "LANG_PAN_PERSONALDPS_DAMAGE";
    e_translate[e_translate["LANG_PAN_PERSONALDPS_PHYS"] = 206] = "LANG_PAN_PERSONALDPS_PHYS";
    e_translate[e_translate["LANG_PAN_PERSONALDPS_BUFF"] = 207] = "LANG_PAN_PERSONALDPS_BUFF";
    e_translate[e_translate["LANG_PAN_PERSONALDPS_HEALING"] = 208] = "LANG_PAN_PERSONALDPS_HEALING";
    e_translate[e_translate["LANG_PAN_PERSONALDPS_CRIT"] = 209] = "LANG_PAN_PERSONALDPS_CRIT";
    e_translate[e_translate["LANG_PAN_PERSONALDPS_NINETY"] = 210] = "LANG_PAN_PERSONALDPS_NINETY";
    e_translate[e_translate["LANG_PAN_PERSONALDPS_FIFTY"] = 211] = "LANG_PAN_PERSONALDPS_FIFTY";
    e_translate[e_translate["LANG_PAN_PERSONALDPS_EVADE"] = 212] = "LANG_PAN_PERSONALDPS_EVADE";
    e_translate[e_translate["LANG_PAN_PERSONALDPS_BLOCK"] = 213] = "LANG_PAN_PERSONALDPS_BLOCK";
    e_translate[e_translate["LANG_PAN_PERSONALDPS_ABSORB"] = 214] = "LANG_PAN_PERSONALDPS_ABSORB";
    e_translate[e_translate["LANG_PAN_PERSONALDPS_INTERRUPT"] = 215] = "LANG_PAN_PERSONALDPS_INTERRUPT";
    e_translate[e_translate["LANG_PAN_PERSONALDPS_CURRENT"] = 216] = "LANG_PAN_PERSONALDPS_CURRENT";
    e_translate[e_translate["LANG_PAN_PERSONALDPS_HIST"] = 217] = "LANG_PAN_PERSONALDPS_HIST";
    e_translate[e_translate["LANG_PAN_PERSONALDPS_COMBAT"] = 218] = "LANG_PAN_PERSONALDPS_COMBAT";
    e_translate[e_translate["LANG_PAN_PERSONALDPS_PS"] = 219] = "LANG_PAN_PERSONALDPS_PS";
    e_translate[e_translate["LANG_PAN_PERSONALDPS_DMG"] = 220] = "LANG_PAN_PERSONALDPS_DMG";
    e_translate[e_translate["LANG_PAN_PERSONALDPS_PERSONAL"] = 221] = "LANG_PAN_PERSONALDPS_PERSONAL";
    e_translate[e_translate["LANG_PAN_PERSONALDPS_INTERVAL"] = 222] = "LANG_PAN_PERSONALDPS_INTERVAL";
    e_translate[e_translate["LANG_PAN_PERSONALDPS_MILLISECONDS"] = 223] = "LANG_PAN_PERSONALDPS_MILLISECONDS";
    e_translate[e_translate["LANG_PAN_PERSONALDPS_HISTLEFT"] = 224] = "LANG_PAN_PERSONALDPS_HISTLEFT";
    e_translate[e_translate["LANG_PAN_PERSONALDPS_HISTRIGHT"] = 225] = "LANG_PAN_PERSONALDPS_HISTRIGHT";
    e_translate[e_translate["LANG_PAN_PERSONALDPS_SHIELDS"] = 226] = "LANG_PAN_PERSONALDPS_SHIELDS";
    /* panels: skills */
    e_translate[e_translate["LANG_PAN_PERSONALSKILLS_HEADER"] = 240] = "LANG_PAN_PERSONALSKILLS_HEADER";
    e_translate[e_translate["LANG_PAN_PERSONALSKILLS_OUT"] = 241] = "LANG_PAN_PERSONALSKILLS_OUT";
    e_translate[e_translate["LANG_PAN_PERSONALSKILLS_IN"] = 242] = "LANG_PAN_PERSONALSKILLS_IN";
    e_translate[e_translate["LANG_PAN_PERSONALSKILLS_ALL"] = 243] = "LANG_PAN_PERSONALSKILLS_ALL";
    e_translate[e_translate["LANG_PAN_PERSONALSKILLS_BUFFS"] = 244] = "LANG_PAN_PERSONALSKILLS_BUFFS";
    e_translate[e_translate["LANG_PAN_PERSONALSKILLS_PHYS"] = 245] = "LANG_PAN_PERSONALSKILLS_PHYS";
    e_translate[e_translate["LANG_PAN_PERSONALSKILLS_SKREMOVE"] = 246] = "LANG_PAN_PERSONALSKILLS_SKREMOVE";
    e_translate[e_translate["LANG_PAN_PERSONALSKILLS_CURRENT"] = 247] = "LANG_PAN_PERSONALSKILLS_CURRENT";
    e_translate[e_translate["LANG_PAN_PERSONALSKILLS_HIST"] = 248] = "LANG_PAN_PERSONALSKILLS_HIST";
    e_translate[e_translate["LANG_PAN_PERSONALSKILLS_COMBAT"] = 249] = "LANG_PAN_PERSONALSKILLS_COMBAT";
    e_translate[e_translate["LANG_PAN_PERSONALSKILLS_PERSONAL"] = 250] = "LANG_PAN_PERSONALSKILLS_PERSONAL";
    e_translate[e_translate["LANG_PAN_PERSONALSKILLS_INTERVAL"] = 251] = "LANG_PAN_PERSONALSKILLS_INTERVAL";
    e_translate[e_translate["LANG_PAN_PERSONALSKILLS_MILLISECONDS"] = 252] = "LANG_PAN_PERSONALSKILLS_MILLISECONDS";
    e_translate[e_translate["LANG_PAN_PERSONALSKILLS_HEADERSHORT"] = 253] = "LANG_PAN_PERSONALSKILLS_HEADERSHORT";
    /* panels: target */
    e_translate[e_translate["LANG_PAN_TARGET_HEADER"] = 270] = "LANG_PAN_TARGET_HEADER";
    e_translate[e_translate["LANG_PAN_TARGET_LOGAUTO"] = 271] = "LANG_PAN_TARGET_LOGAUTO";
    e_translate[e_translate["LANG_PAN_TARGET_LOGMANUAL"] = 272] = "LANG_PAN_TARGET_LOGMANUAL";
    e_translate[e_translate["LANG_PAN_TARGET_LOGNONE"] = 273] = "LANG_PAN_TARGET_LOGNONE";
    e_translate[e_translate["LANG_PAN_TARGET_LOGUNAVAILABLE"] = 274] = "LANG_PAN_TARGET_LOGUNAVAILABLE";
    e_translate[e_translate["LANG_PAN_TARGET_NOLOCK"] = 275] = "LANG_PAN_TARGET_NOLOCK";
    e_translate[e_translate["LANG_PAN_TARGET_COMBAT"] = 276] = "LANG_PAN_TARGET_COMBAT";
    e_translate[e_translate["LANG_PAN_TARGET_RS"] = 277] = "LANG_PAN_TARGET_RS";
    e_translate[e_translate["LANG_PAN_TARGET_DPS"] = 278] = "LANG_PAN_TARGET_DPS";
    e_translate[e_translate["LANG_PAN_TARGET_TTK"] = 279] = "LANG_PAN_TARGET_TTK";
    e_translate[e_translate["LANG_PAN_TARGET_START"] = 280] = "LANG_PAN_TARGET_START";
    e_translate[e_translate["LANG_PAN_TARGET_STOP"] = 281] = "LANG_PAN_TARGET_STOP";
    /* panels: healthbar */
    e_translate[e_translate["LANG_PAN_HEALTHBAR_HEADER"] = 290] = "LANG_PAN_HEALTHBAR_HEADER";
    e_translate[e_translate["LANG_PAN_HEALTHBAR_HP"] = 291] = "LANG_PAN_HEALTHBAR_HP";
    /* panels: chcli */
    e_translate[e_translate["LANG_PAN_CHCLI_HEADER"] = 300] = "LANG_PAN_CHCLI_HEADER";
    e_translate[e_translate["LANG_PAN_CHCLI_OUT"] = 301] = "LANG_PAN_CHCLI_OUT";
    e_translate[e_translate["LANG_PAN_CHCLI_IN"] = 302] = "LANG_PAN_CHCLI_IN";
    e_translate[e_translate["LANG_PAN_CHCLI_ADPS"] = 303] = "LANG_PAN_CHCLI_ADPS";
    e_translate[e_translate["LANG_PAN_CHCLI_BUFFS"] = 304] = "LANG_PAN_CHCLI_BUFFS";
    e_translate[e_translate["LANG_PAN_CHCLI_PHYS"] = 305] = "LANG_PAN_CHCLI_PHYS";
    e_translate[e_translate["LANG_PAN_CHCLI_CND"] = 306] = "LANG_PAN_CHCLI_CND";
    e_translate[e_translate["LANG_PAN_CHCLI_TOTAL"] = 307] = "LANG_PAN_CHCLI_TOTAL";
    e_translate[e_translate["LANG_PAN_CHCLI_H"] = 308] = "LANG_PAN_CHCLI_H";
    e_translate[e_translate["LANG_PAN_CHCLI_F"] = 309] = "LANG_PAN_CHCLI_F";
    e_translate[e_translate["LANG_PAN_CHCLI_COMBAT"] = 310] = "LANG_PAN_CHCLI_COMBAT";
    e_translate[e_translate["LANG_PAN_CHCLI_PS"] = 311] = "LANG_PAN_CHCLI_PS";
    e_translate[e_translate["LANG_PAN_CHCLI_DMG"] = 312] = "LANG_PAN_CHCLI_DMG";
    e_translate[e_translate["LANG_PAN_CHCLI_DISABLED"] = 313] = "LANG_PAN_CHCLI_DISABLED";
    e_translate[e_translate["LANG_PAN_CHCLI_SKREMOVE"] = 314] = "LANG_PAN_CHCLI_SKREMOVE";
    e_translate[e_translate["LANG_PAN_CHCLI_CURRENT"] = 315] = "LANG_PAN_CHCLI_CURRENT";
    e_translate[e_translate["LANG_PAN_CHCLI_HIST"] = 316] = "LANG_PAN_CHCLI_HIST";
    e_translate[e_translate["LANG_PAN_CHCLI_AGREMOVE"] = 317] = "LANG_PAN_CHCLI_AGREMOVE";
    e_translate[e_translate["LANG_PAN_CHCLI_CHCLI"] = 318] = "LANG_PAN_CHCLI_CHCLI";
    e_translate[e_translate["LANG_PAN_CHCLI_INTERVAL"] = 319] = "LANG_PAN_CHCLI_INTERVAL";
    e_translate[e_translate["LANG_PAN_CHCLI_MILLISECONDS"] = 320] = "LANG_PAN_CHCLI_MILLISECONDS";
    e_translate[e_translate["LANG_PAN_CHCLI_PCT"] = 321] = "LANG_PAN_CHCLI_PCT";
    e_translate[e_translate["LANG_PAN_CHCLI_NOPLAYERS"] = 322] = "LANG_PAN_CHCLI_NOPLAYERS";
    e_translate[e_translate["LANG_PAN_CHCLI_HISTLEFT"] = 323] = "LANG_PAN_CHCLI_HISTLEFT";
    e_translate[e_translate["LANG_PAN_CHCLI_HISTRIGHT"] = 324] = "LANG_PAN_CHCLI_HISTRIGHT";
    /* panels: summary */
    e_translate[e_translate["LANG_PAN_SUMMARY_HEADER"] = 340] = "LANG_PAN_SUMMARY_HEADER";
    e_translate[e_translate["LANG_PAN_SUMMARY_CBTTIME"] = 341] = "LANG_PAN_SUMMARY_CBTTIME";
    e_translate[e_translate["LANG_PAN_SUMMARY_ADPSOUT"] = 342] = "LANG_PAN_SUMMARY_ADPSOUT";
    e_translate[e_translate["LANG_PAN_SUMMARY_TGADPSOUT"] = 343] = "LANG_PAN_SUMMARY_TGADPSOUT";
    e_translate[e_translate["LANG_PAN_SUMMARY_ADPSIN"] = 344] = "LANG_PAN_SUMMARY_ADPSIN";
    e_translate[e_translate["LANG_PAN_SUMMARY_TGADPSIN"] = 345] = "LANG_PAN_SUMMARY_TGADPSIN";
    e_translate[e_translate["LANG_PAN_SUMMARY_CRITPCT"] = 346] = "LANG_PAN_SUMMARY_CRITPCT";
    e_translate[e_translate["LANG_PAN_SUMMARY_NINETYPCT"] = 347] = "LANG_PAN_SUMMARY_NINETYPCT";
    e_translate[e_translate["LANG_PAN_SUMMARY_FIFTYPCT"] = 348] = "LANG_PAN_SUMMARY_FIFTYPCT";
    e_translate[e_translate["LANG_PAN_SUMMARY_MOVINGPCT"] = 349] = "LANG_PAN_SUMMARY_MOVINGPCT";
    e_translate[e_translate["LANG_PAN_SUMMARY_FLANKPCT"] = 350] = "LANG_PAN_SUMMARY_FLANKPCT";
    e_translate[e_translate["LANG_PAN_SUMMARY_CANCELTIME"] = 351] = "LANG_PAN_SUMMARY_CANCELTIME";
    e_translate[e_translate["LANG_PAN_SUMMARY_RESCOUNT"] = 352] = "LANG_PAN_SUMMARY_RESCOUNT";
    e_translate[e_translate["LANG_PAN_SUMMARY_RESTIME"] = 353] = "LANG_PAN_SUMMARY_RESTIME";
    e_translate[e_translate["LANG_PAN_SUMMARY_DOWNCOUNT"] = 354] = "LANG_PAN_SUMMARY_DOWNCOUNT";
    e_translate[e_translate["LANG_PAN_SUMMARY_CLEANSEDOUT"] = 355] = "LANG_PAN_SUMMARY_CLEANSEDOUT";
    e_translate[e_translate["LANG_PAN_SUMMARY_STRIPPEDOUT"] = 356] = "LANG_PAN_SUMMARY_STRIPPEDOUT";
    e_translate[e_translate["LANG_PAN_SUMMARY_GLANCEPCT"] = 357] = "LANG_PAN_SUMMARY_GLANCEPCT";
    e_translate[e_translate["LANG_PAN_SUMMARY_EVADES"] = 358] = "LANG_PAN_SUMMARY_EVADES";
    e_translate[e_translate["LANG_PAN_SUMMARY_INTERRUPTS"] = 359] = "LANG_PAN_SUMMARY_INTERRUPTS";
    e_translate[e_translate["LANG_PAN_SUMMARY_MISSES"] = 360] = "LANG_PAN_SUMMARY_MISSES";
    e_translate[e_translate["LANG_PAN_SUMMARY_DODGE"] = 361] = "LANG_PAN_SUMMARY_DODGE";
    e_translate[e_translate["LANG_PAN_SUMMARY_HIST"] = 362] = "LANG_PAN_SUMMARY_HIST";
    e_translate[e_translate["LANG_PAN_SUMMARY_SQSHORT1"] = 363] = "LANG_PAN_SUMMARY_SQSHORT1";
    e_translate[e_translate["LANG_PAN_SUMMARY_SQSHORT2"] = 364] = "LANG_PAN_SUMMARY_SQSHORT2";
    e_translate[e_translate["LANG_PAN_SUMMARY_CLEANSEDIN"] = 365] = "LANG_PAN_SUMMARY_CLEANSEDIN";
    e_translate[e_translate["LANG_PAN_SUMMARY_STRIPPEDIN"] = 366] = "LANG_PAN_SUMMARY_STRIPPEDIN";
    e_translate[e_translate["LANG_PAN_SUMMARY_DOWNTIME"] = 367] = "LANG_PAN_SUMMARY_DOWNTIME";
    e_translate[e_translate["LANG_PAN_SUMMARY_CANCELCOUNT"] = 368] = "LANG_PAN_SUMMARY_CANCELCOUNT";
    e_translate[e_translate["LANG_PAN_SUMMARY_SHIELD"] = 369] = "LANG_PAN_SUMMARY_SHIELD";
    e_translate[e_translate["LANG_PAN_SUMMARY_SHIELDEFF"] = 370] = "LANG_PAN_SUMMARY_SHIELDEFF";
    e_translate[e_translate["LANG_PAN_SUMMARY_BLOCKS"] = 371] = "LANG_PAN_SUMMARY_BLOCKS";
    e_translate[e_translate["LANG_PAN_SUMMARY_ABSORBS"] = 372] = "LANG_PAN_SUMMARY_ABSORBS";
    e_translate[e_translate["LANG_PAN_SUMMARY_CLEANSEDSELF"] = 373] = "LANG_PAN_SUMMARY_CLEANSEDSELF";
    e_translate[e_translate["LANG_PAN_SUMMARY_DURATION"] = 374] = "LANG_PAN_SUMMARY_DURATION";
    e_translate[e_translate["LANG_PAN_SUMMARY_INTENSITY"] = 375] = "LANG_PAN_SUMMARY_INTENSITY";
    e_translate[e_translate["LANG_PAN_SUMMARY_PHYS"] = 376] = "LANG_PAN_SUMMARY_PHYS";
    e_translate[e_translate["LANG_PAN_SUMMARY_COND"] = 377] = "LANG_PAN_SUMMARY_COND";
    e_translate[e_translate["LANG_PAN_SUMMARY_DPSUPTIME"] = 378] = "LANG_PAN_SUMMARY_DPSUPTIME";
    e_translate[e_translate["LANG_PAN_SUMMARY_PROTPCT"] = 379] = "LANG_PAN_SUMMARY_PROTPCT";
    e_translate[e_translate["LANG_PAN_SUMMARY_KILLINGBLOWS"] = 380] = "LANG_PAN_SUMMARY_KILLINGBLOWS";
    e_translate[e_translate["LANG_PAN_SUMMARY_DOWNEDS"] = 381] = "LANG_PAN_SUMMARY_DOWNEDS";
    e_translate[e_translate["LANG_PAN_SUMMARY_DOWNEDPCT"] = 382] = "LANG_PAN_SUMMARY_DOWNEDPCT";
    e_translate[e_translate["LANG_PAN_SUMMARY_ZEROES"] = 383] = "LANG_PAN_SUMMARY_ZEROES";
    e_translate[e_translate["LANG_PAN_SUMMARY_DEATHCOUNT"] = 384] = "LANG_PAN_SUMMARY_DEATHCOUNT";
    e_translate[e_translate["LANG_PAN_SUMMARY_BREAKBAR"] = 385] = "LANG_PAN_SUMMARY_BREAKBAR";
    /* panels: logger */
    e_translate[e_translate["LANG_PAN_LOGGER_HEADER"] = 390] = "LANG_PAN_LOGGER_HEADER";
    e_translate[e_translate["LANG_PAN_LOGGER_HEADER_CBT"] = 391] = "LANG_PAN_LOGGER_HEADER_CBT";
    e_translate[e_translate["LANG_PAN_LOGGER_ENG"] = 392] = "LANG_PAN_LOGGER_ENG";
    e_translate[e_translate["LANG_PAN_LOGGER_GME"] = 393] = "LANG_PAN_LOGGER_GME";
    e_translate[e_translate["LANG_PAN_LOGGER_BOT"] = 394] = "LANG_PAN_LOGGER_BOT";
    e_translate[e_translate["LANG_PAN_LOGGER_TOP"] = 395] = "LANG_PAN_LOGGER_TOP";
    e_translate[e_translate["LANG_PAN_LOGGER_AUTO"] = 396] = "LANG_PAN_LOGGER_AUTO";
    e_translate[e_translate["LANG_PAN_LOGGER_SCROLL"] = 397] = "LANG_PAN_LOGGER_SCROLL";
    e_translate[e_translate["LANG_PAN_LOGGER_FILTER"] = 398] = "LANG_PAN_LOGGER_FILTER";
    e_translate[e_translate["LANG_PAN_LOGGER_RESQ"] = 399] = "LANG_PAN_LOGGER_RESQ";
    e_translate[e_translate["LANG_PAN_LOGGER_CBTQ"] = 400] = "LANG_PAN_LOGGER_CBTQ";
    e_translate[e_translate["LANG_PAN_LOGGER_MBLK"] = 401] = "LANG_PAN_LOGGER_MBLK";
    e_translate[e_translate["LANG_PAN_LOGGER_MSZ"] = 402] = "LANG_PAN_LOGGER_MSZ";
    e_translate[e_translate["LANG_PAN_LOGGER_AG"] = 403] = "LANG_PAN_LOGGER_AG";
    e_translate[e_translate["LANG_PAN_LOGGER_CH"] = 404] = "LANG_PAN_LOGGER_CH";
    e_translate[e_translate["LANG_PAN_LOGGER_CEA"] = 405] = "LANG_PAN_LOGGER_CEA";
    e_translate[e_translate["LANG_PAN_LOGGER_GRC"] = 406] = "LANG_PAN_LOGGER_GRC";
    e_translate[e_translate["LANG_PAN_LOGGER_SCS"] = 407] = "LANG_PAN_LOGGER_SCS";
    e_translate[e_translate["LANG_PAN_LOGGER_SCC"] = 408] = "LANG_PAN_LOGGER_SCC";
    e_translate[e_translate["LANG_PAN_LOGGER_STG"] = 409] = "LANG_PAN_LOGGER_STG";
    e_translate[e_translate["LANG_PAN_LOGGER_SAG"] = 410] = "LANG_PAN_LOGGER_SAG";
    e_translate[e_translate["LANG_PAN_LOGGER_RTH"] = 411] = "LANG_PAN_LOGGER_RTH";
    e_translate[e_translate["LANG_PAN_LOGGER_CCS"] = 412] = "LANG_PAN_LOGGER_CCS";
    e_translate[e_translate["LANG_PAN_LOGGER_HS"] = 413] = "LANG_PAN_LOGGER_HS";
    e_translate[e_translate["LANG_PAN_LOGGER_UI0"] = 414] = "LANG_PAN_LOGGER_UI0";
    e_translate[e_translate["LANG_PAN_LOGGER_UI1"] = 415] = "LANG_PAN_LOGGER_UI1";
    e_translate[e_translate["LANG_PAN_LOGGER_HU"] = 416] = "LANG_PAN_LOGGER_HU";
    e_translate[e_translate["LANG_PAN_LOGGER_LOGGER"] = 417] = "LANG_PAN_LOGGER_LOGGER";
    e_translate[e_translate["LANG_PAN_LOGGER_CHANNEL"] = 418] = "LANG_PAN_LOGGER_CHANNEL";
    e_translate[e_translate["LANG_PAN_LOGGER_SIM"] = 419] = "LANG_PAN_LOGGER_SIM";
    e_translate[e_translate["LANG_PAN_LOGGER_MCI"] = 420] = "LANG_PAN_LOGGER_MCI";
    e_translate[e_translate["LANG_PAN_LOGGER_MCO"] = 421] = "LANG_PAN_LOGGER_MCO";
    e_translate[e_translate["LANG_PAN_LOGGER_LINES"] = 422] = "LANG_PAN_LOGGER_LINES";
    e_translate[e_translate["LANG_PAN_LOGGER_SUPPRESS"] = 423] = "LANG_PAN_LOGGER_SUPPRESS";
    e_translate[e_translate["LANG_PAN_LOGGER_PERFTIME"] = 424] = "LANG_PAN_LOGGER_PERFTIME";
    e_translate[e_translate["LANG_PAN_LOGGER_PERFUSE"] = 425] = "LANG_PAN_LOGGER_PERFUSE";
    e_translate[e_translate["LANG_PAN_LOGGER_EVENTS"] = 426] = "LANG_PAN_LOGGER_EVENTS";
    e_translate[e_translate["LANG_PAN_LOGGER_CBTSTATECHANGE"] = 427] = "LANG_PAN_LOGGER_CBTSTATECHANGE";
    e_translate[e_translate["LANG_PAN_LOGGER_CBTACTIVATION"] = 428] = "LANG_PAN_LOGGER_CBTACTIVATION";
    e_translate[e_translate["LANG_PAN_LOGGER_CBTBUFFREMOVE"] = 429] = "LANG_PAN_LOGGER_CBTBUFFREMOVE";
    e_translate[e_translate["LANG_PAN_LOGGER_CBTBUFFAPPLY"] = 430] = "LANG_PAN_LOGGER_CBTBUFFAPPLY";
    e_translate[e_translate["LANG_PAN_LOGGER_CBTBUFFDAMAGE"] = 431] = "LANG_PAN_LOGGER_CBTBUFFDAMAGE";
    e_translate[e_translate["LANG_PAN_LOGGER_CBTBUFFHEAL"] = 432] = "LANG_PAN_LOGGER_CBTBUFFHEAL";
    e_translate[e_translate["LANG_PAN_LOGGER_CBTDIRECTDAMAGE"] = 433] = "LANG_PAN_LOGGER_CBTDIRECTDAMAGE";
    e_translate[e_translate["LANG_PAN_LOGGER_CBTDIRECTHEAL"] = 434] = "LANG_PAN_LOGGER_CBTDIRECTHEAL";
    e_translate[e_translate["LANG_PAN_LOGGER_DEBUG"] = 435] = "LANG_PAN_LOGGER_DEBUG";
    e_translate[e_translate["LANG_PAN_LOGGER_CBTMINION"] = 436] = "LANG_PAN_LOGGER_CBTMINION";
    e_translate[e_translate["LANG_PAN_LOGGER_CBTBREAKBARDAMAGE"] = 437] = "LANG_PAN_LOGGER_CBTBREAKBARDAMAGE";
    /* panels: compass */
    e_translate[e_translate["LANG_PAN_COMPASS_HEADER"] = 440] = "LANG_PAN_COMPASS_HEADER";
    e_translate[e_translate["LANG_PAN_COMPASS_N"] = 441] = "LANG_PAN_COMPASS_N";
    e_translate[e_translate["LANG_PAN_COMPASS_E"] = 442] = "LANG_PAN_COMPASS_E";
    e_translate[e_translate["LANG_PAN_COMPASS_S"] = 443] = "LANG_PAN_COMPASS_S";
    e_translate[e_translate["LANG_PAN_COMPASS_W"] = 444] = "LANG_PAN_COMPASS_W";
    e_translate[e_translate["LANG_PAN_COMPASS_BEARING"] = 445] = "LANG_PAN_COMPASS_BEARING";
    /* panels: metrics */
    e_translate[e_translate["LANG_PAN_METRICS_HEADER"] = 450] = "LANG_PAN_METRICS_HEADER";
    e_translate[e_translate["LANG_PAN_METRICS_FPS"] = 451] = "LANG_PAN_METRICS_FPS";
    e_translate[e_translate["LANG_PAN_METRICS_PING"] = 452] = "LANG_PAN_METRICS_PING";
    e_translate[e_translate["LANG_PAN_METRICS_MAPTYPE"] = 453] = "LANG_PAN_METRICS_MAPTYPE";
    e_translate[e_translate["LANG_PAN_METRICS_MAPID"] = 454] = "LANG_PAN_METRICS_MAPID";
    e_translate[e_translate["LANG_PAN_METRICS_MAPLV"] = 455] = "LANG_PAN_METRICS_MAPLV";
    e_translate[e_translate["LANG_PAN_METRICS_BUILDGW"] = 456] = "LANG_PAN_METRICS_BUILDGW";
    e_translate[e_translate["LANG_PAN_METRICS_BUILDARC"] = 457] = "LANG_PAN_METRICS_BUILDARC";
    e_translate[e_translate["LANG_PAN_METRICS_TICK"] = 458] = "LANG_PAN_METRICS_TICK";
    /* panels: gathering */
    e_translate[e_translate["LANG_PAN_GATHER_HEADER"] = 460] = "LANG_PAN_GATHER_HEADER";
    e_translate[e_translate["LANG_PAN_GATHER_PICKH"] = 461] = "LANG_PAN_GATHER_PICKH";
    e_translate[e_translate["LANG_PAN_GATHER_AXEH"] = 462] = "LANG_PAN_GATHER_AXEH";
    e_translate[e_translate["LANG_PAN_GATHER_SICKLEH"] = 463] = "LANG_PAN_GATHER_SICKLEH";
    e_translate[e_translate["LANG_PAN_GATHER_PICKED"] = 464] = "LANG_PAN_GATHER_PICKED";
    e_translate[e_translate["LANG_PAN_GATHER_AXED"] = 465] = "LANG_PAN_GATHER_AXED";
    e_translate[e_translate["LANG_PAN_GATHER_SICKLED"] = 466] = "LANG_PAN_GATHER_SICKLED";
    e_translate[e_translate["LANG_PAN_GATHER_TOOLS"] = 467] = "LANG_PAN_GATHER_TOOLS";
    e_translate[e_translate["LANG_PAN_GATHER_PICKREMAIN"] = 468] = "LANG_PAN_GATHER_PICKREMAIN";
    e_translate[e_translate["LANG_PAN_GATHER_AXEREMAIN"] = 469] = "LANG_PAN_GATHER_AXEREMAIN";
    e_translate[e_translate["LANG_PAN_GATHER_SICKLEREMAIN"] = 470] = "LANG_PAN_GATHER_SICKLEREMAIN";
    e_translate[e_translate["LANG_PAN_GATHER_TIME"] = 471] = "LANG_PAN_GATHER_TIME";
    /* panels: options */
    e_translate[e_translate["LANG_PAN_OPTIONS_HEADER"] = 490] = "LANG_PAN_OPTIONS_HEADER";
    e_translate[e_translate["LANG_PAN_OPTIONS_PANELS"] = 491] = "LANG_PAN_OPTIONS_PANELS";
    e_translate[e_translate["LANG_PAN_OPTIONS_SUMMARIES"] = 492] = "LANG_PAN_OPTIONS_SUMMARIES";
    e_translate[e_translate["LANG_PAN_OPTIONS_INTERFACE"] = 493] = "LANG_PAN_OPTIONS_INTERFACE";
    e_translate[e_translate["LANG_PAN_OPTIONS_Y"] = 494] = "LANG_PAN_OPTIONS_Y";
    e_translate[e_translate["LANG_PAN_OPTIONS_N"] = 495] = "LANG_PAN_OPTIONS_N";
    e_translate[e_translate["LANG_PAN_OPTIONS_SM_LINK"] = 496] = "LANG_PAN_OPTIONS_SM_LINK";
    e_translate[e_translate["LANG_PAN_OPTIONS_SM_AUTOOPEN"] = 497] = "LANG_PAN_OPTIONS_SM_AUTOOPEN";
    e_translate[e_translate["LANG_PAN_OPTIONS_SM_ADPSOUT"] = 498] = "LANG_PAN_OPTIONS_SM_ADPSOUT";
    e_translate[e_translate["LANG_PAN_OPTIONS_SM_ADPSIN"] = 499] = "LANG_PAN_OPTIONS_SM_ADPSIN";
    e_translate[e_translate["LANG_PAN_OPTIONS_SM_BUFFS"] = 500] = "LANG_PAN_OPTIONS_SM_BUFFS";
    e_translate[e_translate["LANG_PAN_OPTIONS_SM_RATES"] = 501] = "LANG_PAN_OPTIONS_SM_RATES";
    e_translate[e_translate["LANG_PAN_OPTIONS_SM_AGSTATES"] = 502] = "LANG_PAN_OPTIONS_SM_AGSTATES";
    e_translate[e_translate["LANG_PAN_OPTIONS_SM_BUFFEVENTS"] = 503] = "LANG_PAN_OPTIONS_SM_BUFFEVENTS";
    e_translate[e_translate["LANG_PAN_OPTIONS_SM_RESULTS"] = 504] = "LANG_PAN_OPTIONS_SM_RESULTS";
    e_translate[e_translate["LANG_PAN_OPTIONS_BS_LOCKTARGET"] = 505] = "LANG_PAN_OPTIONS_BS_LOCKTARGET";
    e_translate[e_translate["LANG_PAN_OPTIONS_BS_SAVELOGS"] = 506] = "LANG_PAN_OPTIONS_BS_SAVELOGS";
    e_translate[e_translate["LANG_PAN_OPTIONS_BS_NPCINPATH"] = 507] = "LANG_PAN_OPTIONS_BS_NPCINPATH";
    e_translate[e_translate["LANG_PAN_OPTIONS_BS_COMPRESS"] = 508] = "LANG_PAN_OPTIONS_BS_COMPRESS";
    e_translate[e_translate["LANG_PAN_OPTIONS_BS_PANSNAP"] = 509] = "LANG_PAN_OPTIONS_BS_PANSNAP";
    e_translate[e_translate["LANG_PAN_OPTIONS_BS_ALWAYSREQMOD"] = 510] = "LANG_PAN_OPTIONS_BS_ALWAYSREQMOD";
    e_translate[e_translate["LANG_PAN_OPTIONS_BS_COMBATDETAIL"] = 511] = "LANG_PAN_OPTIONS_BS_COMBATDETAIL";
    e_translate[e_translate["LANG_PAN_OPTIONS_BS_VERBOSITY"] = 512] = "LANG_PAN_OPTIONS_BS_VERBOSITY";
    e_translate[e_translate["LANG_PAN_OPTIONS_RESTRICTED"] = 513] = "LANG_PAN_OPTIONS_RESTRICTED";
    e_translate[e_translate["LANG_PAN_OPTIONS_RS_HBARS"] = 514] = "LANG_PAN_OPTIONS_RS_HBARS";
    e_translate[e_translate["LANG_PAN_OPTIONS_RS_EMBEDLL"] = 515] = "LANG_PAN_OPTIONS_RS_EMBEDLL";
    e_translate[e_translate["LANG_PAN_OPTIONS_RS_FLASHWHISPER"] = 516] = "LANG_PAN_OPTIONS_RS_FLASHWHISPER";
    e_translate[e_translate["LANG_PAN_OPTIONS_RS_FLASHPARTY"] = 517] = "LANG_PAN_OPTIONS_RS_FLASHPARTY";
    e_translate[e_translate["LANG_PAN_OPTIONS_RS_RWACCEPT"] = 518] = "LANG_PAN_OPTIONS_RS_RWACCEPT";
    e_translate[e_translate["LANG_PAN_OPTIONS_RS_CONSUMEMAX"] = 519] = "LANG_PAN_OPTIONS_RS_CONSUMEMAX";
    e_translate[e_translate["LANG_PAN_OPTIONS_RS_CONSUMESKIPDELAY"] = 520] = "LANG_PAN_OPTIONS_RS_CONSUMESKIPDELAY";
    e_translate[e_translate["LANG_PAN_OPTIONS_RS_KEYS"] = 521] = "LANG_PAN_OPTIONS_RS_KEYS";
    e_translate[e_translate["LANG_PAN_OPTIONS_BS_GUILDINPATH"] = 522] = "LANG_PAN_OPTIONS_BS_GUILDINPATH";
    e_translate[e_translate["LANG_PAN_OPTIONS_BS_BGBARS"] = 523] = "LANG_PAN_OPTIONS_BS_BGBARS";
    e_translate[e_translate["LANG_PAN_OPTIONS_BS_FWDINPUT"] = 524] = "LANG_PAN_OPTIONS_BS_FWDINPUT";
    e_translate[e_translate["LANG_PAN_OPTIONS_BS_TRANSPARENCY"] = 525] = "LANG_PAN_OPTIONS_BS_TRANSPARENCY";
    e_translate[e_translate["LANG_PAN_OPTIONS_BS_BGBARCOLOUR"] = 526] = "LANG_PAN_OPTIONS_BS_BGBARCOLOUR";
    e_translate[e_translate["LANG_PAN_OPTIONS_BS_PLAYERINPATH"] = 527] = "LANG_PAN_OPTIONS_BS_PLAYERINPATH";
    e_translate[e_translate["LANG_PAN_OPTIONS_BS_ALTERNATEUI"] = 528] = "LANG_PAN_OPTIONS_BS_ALTERNATEUI";
    e_translate[e_translate["LANG_PAN_OPTIONS_BS_RECOUNTLIKE"] = 529] = "LANG_PAN_OPTIONS_BS_RECOUNTLIKE";
    e_translate[e_translate["LANG_PAN_OPTIONS_BS_ALTUITRIM"] = 530] = "LANG_PAN_OPTIONS_BS_ALTUITRIM";
    e_translate[e_translate["LANG_PAN_OPTIONS_BS_ALTUIMOVELOCK"] = 531] = "LANG_PAN_OPTIONS_BS_ALTUIMOVELOCK";
    e_translate[e_translate["LANG_PAN_OPTIONS_BS_MENULOCK"] = 532] = "LANG_PAN_OPTIONS_BS_MENULOCK";
    e_translate[e_translate["LANG_PAN_OPTIONS_BS_NOTOTALS"] = 533] = "LANG_PAN_OPTIONS_BS_NOTOTALS";
    e_translate[e_translate["LANG_PAN_OPTIONS_BS_ALTUICLICKLOCK"] = 534] = "LANG_PAN_OPTIONS_BS_ALTUICLICKLOCK";
    e_translate[e_translate["LANG_PAN_OPTIONS_RS_EMBEDEXTRA"] = 535] = "LANG_PAN_OPTIONS_RS_EMBEDEXTRA";
    e_translate[e_translate["LANG_PAN_OPTIONS_BS_LOGGING"] = 536] = "LANG_PAN_OPTIONS_BS_LOGGING";
    e_translate[e_translate["LANG_PAN_OPTIONS_SM_HIDEZEROBUFFS"] = 537] = "LANG_PAN_OPTIONS_SM_HIDEZEROBUFFS";
    e_translate[e_translate["LANG_PAN_OPTIONS_RS_HIDEOBLACH"] = 538] = "LANG_PAN_OPTIONS_RS_HIDEOBLACH";
    e_translate[e_translate["LANG_PAN_OPTIONS_RS_HIDEOBLQUEST"] = 539] = "LANG_PAN_OPTIONS_RS_HIDEOBLQUEST";
    e_translate[e_translate["LANG_PAN_OPTIONS_BS_NOTIMERS"] = 540] = "LANG_PAN_OPTIONS_BS_NOTIMERS";
    e_translate[e_translate["LANG_PAN_OPTIONS_BS_FASTCLOSE"] = 541] = "LANG_PAN_OPTIONS_BS_FASTCLOSE";
    e_translate[e_translate["LANG_PAN_OPTIONS_BS_LOGS"] = 542] = "LANG_PAN_OPTIONS_BS_LOGS";
    e_translate[e_translate["LANG_PAN_OPTIONS_BS_CONFIG"] = 543] = "LANG_PAN_OPTIONS_BS_CONFIG";
    e_translate[e_translate["LANG_PAN_OPTIONS_BS_STYLE"] = 544] = "LANG_PAN_OPTIONS_BS_STYLE";
    e_translate[e_translate["LANG_PAN_OPTIONS_BS_COLOURSIMGUI"] = 545] = "LANG_PAN_OPTIONS_BS_COLOURSIMGUI";
    e_translate[e_translate["LANG_PAN_OPTIONS_BS_COLOURSARC"] = 546] = "LANG_PAN_OPTIONS_BS_COLOURSARC";
    e_translate[e_translate["LANG_PAN_OPTIONS_BS_COLOURSPROF"] = 547] = "LANG_PAN_OPTIONS_BS_COLOURSPROF";
    e_translate[e_translate["LANG_PAN_OPTIONS_BS_COLOURSSQUAD"] = 548] = "LANG_PAN_OPTIONS_BS_COLOURSSQUAD";
    e_translate[e_translate["LANG_PAN_OPTIONS_BS_APPEARANCE"] = 549] = "LANG_PAN_OPTIONS_BS_APPEARANCE";
    /* panels: consume */
    e_translate[e_translate["LANG_PAN_CONSUME_HEADER"] = 550] = "LANG_PAN_CONSUME_HEADER";
    e_translate[e_translate["LANG_PAN_CONSUME_NONE"] = 551] = "LANG_PAN_CONSUME_NONE";
    /* panels: waypoint */
    e_translate[e_translate["LANG_PAN_WAYPOINT_HEADER"] = 560] = "LANG_PAN_WAYPOINT_HEADER";
    e_translate[e_translate["LANG_PAN_WAYPOINT_EBG"] = 561] = "LANG_PAN_WAYPOINT_EBG";
    e_translate[e_translate["LANG_PAN_WAYPOINT_RBL"] = 562] = "LANG_PAN_WAYPOINT_RBL";
    e_translate[e_translate["LANG_PAN_WAYPOINT_BBL"] = 563] = "LANG_PAN_WAYPOINT_BBL";
    e_translate[e_translate["LANG_PAN_WAYPOINT_GBL"] = 564] = "LANG_PAN_WAYPOINT_GBL";
    e_translate[e_translate["LANG_PAN_WAYPOINT_NONE"] = 565] = "LANG_PAN_WAYPOINT_NONE";
    e_translate[e_translate["LANG_PAN_WAYPOINT_DISABLED"] = 566] = "LANG_PAN_WAYPOINT_DISABLED";
    /* panels: templates */
    e_translate[e_translate["LANG_PAN_TEMPLATES_HEADER"] = 570] = "LANG_PAN_TEMPLATES_HEADER";
    e_translate[e_translate["LANG_PAN_TEMPLATES_LOAD"] = 571] = "LANG_PAN_TEMPLATES_LOAD";
    e_translate[e_translate["LANG_PAN_TEMPLATES_SAVE"] = 572] = "LANG_PAN_TEMPLATES_SAVE";
    e_translate[e_translate["LANG_PAN_TEMPLATES_SORTNUMBER"] = 573] = "LANG_PAN_TEMPLATES_SORTNUMBER";
    e_translate[e_translate["LANG_PAN_TEMPLATES_TRAITS"] = 574] = "LANG_PAN_TEMPLATES_TRAITS";
    e_translate[e_translate["LANG_PAN_TEMPLATES_GEAR"] = 575] = "LANG_PAN_TEMPLATES_GEAR";
    e_translate[e_translate["LANG_PAN_TEMPLATES_SKILLS"] = 576] = "LANG_PAN_TEMPLATES_SKILLS";
    e_translate[e_translate["LANG_PAN_TEMPLATES_LEGENDARY"] = 577] = "LANG_PAN_TEMPLATES_LEGENDARY";
    e_translate[e_translate["LANG_PAN_TEMPLATES_PVP"] = 578] = "LANG_PAN_TEMPLATES_PVP";
    e_translate[e_translate["LANG_PAN_TEMPLATES_PREEQUIP"] = 579] = "LANG_PAN_TEMPLATES_PREEQUIP";
    e_translate[e_translate["LANG_PAN_TEMPLATES_SORTALPHA"] = 580] = "LANG_PAN_TEMPLATES_SORTALPHA";
    e_translate[e_translate["LANG_PAN_TEMPLATES_COPY"] = 581] = "LANG_PAN_TEMPLATES_COPY";
    e_translate[e_translate["LANG_PAN_TEMPLATES_NAME"] = 582] = "LANG_PAN_TEMPLATES_NAME";
    e_translate[e_translate["LANG_PAN_TEMPLATES_DELETE"] = 583] = "LANG_PAN_TEMPLATES_DELETE";
    e_translate[e_translate["LANG_PAN_TEMPLATES_OVERWRITE"] = 584] = "LANG_PAN_TEMPLATES_OVERWRITE";
    e_translate[e_translate["LANG_PAN_TEMPLATES_SAVED"] = 585] = "LANG_PAN_TEMPLATES_SAVED";
    e_translate[e_translate["LANG_PAN_TEMPLATES_LOADING"] = 586] = "LANG_PAN_TEMPLATES_LOADING";
    e_translate[e_translate["LANG_PAN_TEMPLATES_REDUCEDRATE"] = 587] = "LANG_PAN_TEMPLATES_REDUCEDRATE";
    e_translate[e_translate["LANG_PAN_TEMPLATES_DISABLED"] = 588] = "LANG_PAN_TEMPLATES_DISABLED";
    e_translate[e_translate["LANG_PAN_TEMPLATES_CANCEL"] = 589] = "LANG_PAN_TEMPLATES_CANCEL";
    /* panels: buffs */
    e_translate[e_translate["LANG_PAN_BUFFS_HEADER"] = 590] = "LANG_PAN_BUFFS_HEADER";
    e_translate[e_translate["LANG_PAN_BUFFS_WARNING"] = 591] = "LANG_PAN_BUFFS_WARNING";
    /* panels: details */
    e_translate[e_translate["LANG_PAN_DETAIL_HEADER"] = 610] = "LANG_PAN_DETAIL_HEADER";
    e_translate[e_translate["LANG_PAN_DETAIL_MIN"] = 611] = "LANG_PAN_DETAIL_MIN";
    e_translate[e_translate["LANG_PAN_DETAIL_MAX"] = 612] = "LANG_PAN_DETAIL_MAX";
    e_translate[e_translate["LANG_PAN_DETAIL_ELAPSED"] = 613] = "LANG_PAN_DETAIL_ELAPSED";
    e_translate[e_translate["LANG_PAN_DETAIL_REMOVED"] = 614] = "LANG_PAN_DETAIL_REMOVED";
    /* common: custom */
    e_translate[e_translate["LANG_COMMON_CSK_DODGE"] = 620] = "LANG_COMMON_CSK_DODGE";
    e_translate[e_translate["LANG_COMMON_CSK_SHIELD"] = 621] = "LANG_COMMON_CSK_SHIELD";
    e_translate[e_translate["LANG_COMMON_CSK_BREAKBAR"] = 622] = "LANG_COMMON_CSK_BREAKBAR";
    /* common: skills2 */
    e_translate[e_translate["LANG_COMMON_SKILLS2_NOEVENTS"] = 630] = "LANG_COMMON_SKILLS2_NOEVENTS";
    e_translate[e_translate["LANG_COMMON_SKILLS2_SHIELDED"] = 631] = "LANG_COMMON_SKILLS2_SHIELDED";
    e_translate[e_translate["LANG_COMMON_SKILLS2_HITSANY"] = 632] = "LANG_COMMON_SKILLS2_HITSANY";
    e_translate[e_translate["LANG_COMMON_SKILLS2_DMGPHYS"] = 633] = "LANG_COMMON_SKILLS2_DMGPHYS";
    e_translate[e_translate["LANG_COMMON_SKILLS2_DMGBUFF"] = 634] = "LANG_COMMON_SKILLS2_DMGBUFF";
    e_translate[e_translate["LANG_COMMON_SKILLS2_CHANNELED"] = 635] = "LANG_COMMON_SKILLS2_CHANNELED";
    e_translate[e_translate["LANG_COMMON_SKILLS2_PROTECTED"] = 636] = "LANG_COMMON_SKILLS2_PROTECTED";
    e_translate[e_translate["LANG_COMMON_SKILLS2_KILLINGBLOWS"] = 637] = "LANG_COMMON_SKILLS2_KILLINGBLOWS";
    e_translate[e_translate["LANG_COMMON_SKILLS2_DOWNEDS"] = 638] = "LANG_COMMON_SKILLS2_DOWNEDS";
    e_translate[e_translate["LANG_COMMON_SKILLS2_VALUESHIELD"] = 639] = "LANG_COMMON_SKILLS2_VALUESHIELD";
    e_translate[e_translate["LANG_COMMON_SKILLS2_BLOCKS"] = 640] = "LANG_COMMON_SKILLS2_BLOCKS";
    e_translate[e_translate["LANG_COMMON_SKILLS2_EVADES"] = 641] = "LANG_COMMON_SKILLS2_EVADES";
    e_translate[e_translate["LANG_COMMON_SKILLS2_ABSORBS"] = 642] = "LANG_COMMON_SKILLS2_ABSORBS";
    e_translate[e_translate["LANG_COMMON_SKILLS2_ZEROES"] = 643] = "LANG_COMMON_SKILLS2_ZEROES";
    /* common: assorted */
    e_translate[e_translate["LANG_COMMON_AS_SUCCESS"] = 660] = "LANG_COMMON_AS_SUCCESS";
    e_translate[e_translate["LANG_COMMON_AS_FAIL"] = 661] = "LANG_COMMON_AS_FAIL";
    e_translate[e_translate["LANG_COMMON_AS_PADDING"] = 662] = "LANG_COMMON_AS_PADDING";
    e_translate[e_translate["LANG_COMMON_AS_BACKGROUND"] = 663] = "LANG_COMMON_AS_BACKGROUND";
    e_translate[e_translate["LANG_COMMON_AS_ONELINE"] = 664] = "LANG_COMMON_AS_ONELINE";
    e_translate[e_translate["LANG_COMMON_AS_ALIGNRIGHT"] = 665] = "LANG_COMMON_AS_ALIGNRIGHT";
    e_translate[e_translate["LANG_COMMON_AS_RESET"] = 666] = "LANG_COMMON_AS_RESET";
    e_translate[e_translate["LANG_COMMON_AS_TOTAL"] = 667] = "LANG_COMMON_AS_TOTAL";
    e_translate[e_translate["LANG_COMMON_AS_CLEAVE"] = 668] = "LANG_COMMON_AS_CLEAVE";
    e_translate[e_translate["LANG_COMMON_AS_TARGET"] = 669] = "LANG_COMMON_AS_TARGET";
    e_translate[e_translate["LANG_COMMON_AS_IN"] = 670] = "LANG_COMMON_AS_IN";
    e_translate[e_translate["LANG_COMMON_AS_TITLE"] = 671] = "LANG_COMMON_AS_TITLE";
    e_translate[e_translate["LANG_COMMON_AS_NOHISTORY"] = 672] = "LANG_COMMON_AS_NOHISTORY";
    e_translate[e_translate["LANG_COMMON_AS_AUTOSIZE"] = 673] = "LANG_COMMON_AS_AUTOSIZE";
    e_translate[e_translate["LANG_COMMON_AS_LISTLENGTH"] = 674] = "LANG_COMMON_AS_LISTLENGTH";
    e_translate[e_translate["LANG_COMMON_AS_SCROLLBAR"] = 675] = "LANG_COMMON_AS_SCROLLBAR";
    // @ts-ignore
    e_translate[e_translate["LANG_COMMON_AS_FRIENDLY"] = 676] = "LANG_COMMON_AS_FRIENDLY";
    e_translate[e_translate["LANG_COMMON_AS_LIST"] = 677] = "LANG_COMMON_AS_LIST";
    e_translate[e_translate["LANG_COMMON_AS_SKILLS"] = 678] = "LANG_COMMON_AS_SKILLS";
    e_translate[e_translate["LANG_COMMON_AS_TARGETS"] = 679] = "LANG_COMMON_AS_TARGETS";
    e_translate[e_translate["LANG_COMMON_AS_LOG"] = 680] = "LANG_COMMON_AS_LOG";
    e_translate[e_translate["LANG_COMMON_AS_EXTRAS"] = 681] = "LANG_COMMON_AS_EXTRAS";
    e_translate[e_translate["LANG_COMMON_AS_VERSIONCHECK"] = 682] = "LANG_COMMON_AS_VERSIONCHECK";
    e_translate[e_translate["LANG_COMMON_AS_NOOBLACH"] = 683] = "LANG_COMMON_AS_NOOBLACH";
    e_translate[e_translate["LANG_COMMON_AS_NOOBLQUEST"] = 684] = "LANG_COMMON_AS_NOOBLQUEST";
    e_translate[e_translate["LANG_COMMON_AS_NOCOMBATTEXT"] = 685] = "LANG_COMMON_AS_NOCOMBATTEXT";
    e_translate[e_translate["LANG_COMMON_AS_COMBATTIME"] = 686] = "LANG_COMMON_AS_COMBATTIME";
    e_translate[e_translate["LANG_COMMON_AS_SORTDPS"] = 687] = "LANG_COMMON_AS_SORTDPS";
    e_translate[e_translate["LANG_COMMON_AS_STYLE"] = 688] = "LANG_COMMON_AS_STYLE";
    e_translate[e_translate["LANG_COMMON_AS_BUFFS"] = 689] = "LANG_COMMON_AS_BUFFS";
    e_translate[e_translate["LANG_COMMON_AS_SORTTARGET"] = 690] = "LANG_COMMON_AS_SORTTARGET";
    e_translate[e_translate["LANG_COMMON_AS_DISPLAY"] = 691] = "LANG_COMMON_AS_DISPLAY";
    e_translate[e_translate["LANG_COMMON_AS_COLOURSUBGROUP"] = 692] = "LANG_COMMON_AS_COLOURSUBGROUP";
    e_translate[e_translate["LANG_COMMON_AS_FORMATTOOLTIP"] = 693] = "LANG_COMMON_AS_FORMATTOOLTIP";
    e_translate[e_translate["LANG_COMMON_AS_PLAYERFORMAT"] = 694] = "LANG_COMMON_AS_PLAYERFORMAT";
    e_translate[e_translate["LANG_COMMON_AS_DEBUG"] = 695] = "LANG_COMMON_AS_DEBUG";
    e_translate[e_translate["LANG_COMMON_AS_DATA"] = 696] = "LANG_COMMON_AS_DATA";
    e_translate[e_translate["LANG_COMMON_AS_LABELS"] = 697] = "LANG_COMMON_AS_LABELS";
    e_translate[e_translate["LANG_COMMON_AS_NUMBERS"] = 698] = "LANG_COMMON_AS_NUMBERS";
    e_translate[e_translate["LANG_COMMON_AS_PROF"] = 699] = "LANG_COMMON_AS_PROF";
    e_translate[e_translate["LANG_COMMON_AS_TOPSKILLS"] = 700] = "LANG_COMMON_AS_TOPSKILLS";
    e_translate[e_translate["LANG_COMMON_AS_TOPTARGETS"] = 701] = "LANG_COMMON_AS_TOPTARGETS";
    e_translate[e_translate["LANG_COMMON_AS_WIDTH"] = 702] = "LANG_COMMON_AS_WIDTH";
    e_translate[e_translate["LANG_COMMON_AS_DAMAGE"] = 703] = "LANG_COMMON_AS_DAMAGE";
    e_translate[e_translate["LANG_COMMON_AS_TAKEN"] = 704] = "LANG_COMMON_AS_TAKEN";
    e_translate[e_translate["LANG_COMMON_AS_TITLEMATCHFRAME"] = 705] = "LANG_COMMON_AS_TITLEMATCHFRAME";
    e_translate[e_translate["LANG_COMMON_AS_TITLEFORMATTOOLTIP"] = 706] = "LANG_COMMON_AS_TITLEFORMATTOOLTIP";
    e_translate[e_translate["LANG_COMMON_AS_TITLEFORMAT"] = 707] = "LANG_COMMON_AS_TITLEFORMAT";
    e_translate[e_translate["LANG_COMMON_AS_REC"] = 708] = "LANG_COMMON_AS_REC";
    e_translate[e_translate["LANG_COMMON_AS_CUR"] = 709] = "LANG_COMMON_AS_CUR";
    e_translate[e_translate["LANG_COMMON_AS_LOGSINVALID"] = 710] = "LANG_COMMON_AS_LOGSINVALID";
    e_translate[e_translate["LANG_COMMON_AS_MAPRELOAD"] = 711] = "LANG_COMMON_AS_MAPRELOAD";
    e_translate[e_translate["LANG_COMMON_AS_INTERVAL"] = 712] = "LANG_COMMON_AS_INTERVAL";
    e_translate[e_translate["LANG_COMMON_AS_NAMECHARWIDTH"] = 713] = "LANG_COMMON_AS_NAMECHARWIDTH";
    e_translate[e_translate["LANG_COMMON_AS_NOOBLEVENT"] = 714] = "LANG_COMMON_AS_NOOBLEVENT";
    e_translate[e_translate["LANG_COMMON_AS_SHOWADVANCEDSTYLEOPTS"] = 715] = "LANG_COMMON_AS_SHOWADVANCEDSTYLEOPTS";
    e_translate[e_translate["LANG_COMMON_AS_SHOWADVANCEDSTYLEOPTSINFO"] = 716] = "LANG_COMMON_AS_SHOWADVANCEDSTYLEOPTSINFO";
    e_translate[e_translate["LANG_COMMON_AS_SHOWADVANCEDSTYLEOPTSCOL"] = 717] = "LANG_COMMON_AS_SHOWADVANCEDSTYLEOPTSCOL";
    e_translate[e_translate["LANG_COMMON_AS_SHOWADVANCEDSTYLEOPTSPREC"] = 718] = "LANG_COMMON_AS_SHOWADVANCEDSTYLEOPTSPREC";
    e_translate[e_translate["LANG_COMMON_AS_NAME"] = 719] = "LANG_COMMON_AS_NAME";
    e_translate[e_translate["LANG_COMMON_AS_NAMECOLPROF"] = 720] = "LANG_COMMON_AS_NAMECOLPROF";
    e_translate[e_translate["LANG_COMMON_AS_NAMECOLSUBGROUP"] = 721] = "LANG_COMMON_AS_NAMECOLSUBGROUP";
    e_translate[e_translate["LANG_COMMON_AS_SORTSUBGROUP"] = 722] = "LANG_COMMON_AS_SORTSUBGROUP";
    e_translate[e_translate["LANG_COMMON_AS_MEMGW2"] = 723] = "LANG_COMMON_AS_MEMGW2";
    e_translate[e_translate["LANG_COMMON_AS_MEMARC"] = 724] = "LANG_COMMON_AS_MEMARC";
    e_translate[e_translate["LANG_COMMON_AS_DISTCBT"] = 725] = "LANG_COMMON_AS_DISTCBT";
    e_translate[e_translate["LANG_COMMON_AS_DISTOOC"] = 726] = "LANG_COMMON_AS_DISTOOC";
    e_translate[e_translate["LANG_COMMON_AS_TIMECBT"] = 727] = "LANG_COMMON_AS_TIMECBT";
    e_translate[e_translate["LANG_COMMON_AS_TIMEOOC"] = 728] = "LANG_COMMON_AS_TIMEOOC";
    e_translate[e_translate["LANG_COMMON_AS_DETAILED"] = 729] = "LANG_COMMON_AS_DETAILED";
    e_translate[e_translate["LANG_COMMON_AS_SLOWVATOOLTIP"] = 730] = "LANG_COMMON_AS_SLOWVATOOLTIP";
    e_translate[e_translate["LANG_COMMON_AS_SLOWVA"] = 731] = "LANG_COMMON_AS_SLOWVA";
    e_translate[e_translate["LANG_COMMON_AS_SIMDISABLED"] = 732] = "LANG_COMMON_AS_SIMDISABLED";
    e_translate[e_translate["LANG_COMMON_AS_SORTADV"] = 733] = "LANG_COMMON_AS_SORTADV";
    e_translate[e_translate["LANG_COMMON_AS_SORTADVTOOLTIP"] = 734] = "LANG_COMMON_AS_SORTADVTOOLTIP";
    e_translate[e_translate["LANG_COMMON_AS_SHOWADVANCEDSTYLEOPTSTOOLTIP"] = 735] = "LANG_COMMON_AS_SHOWADVANCEDSTYLEOPTSTOOLTIP";
    e_translate[e_translate["LANG_COMMON_AS_HISTORY"] = 736] = "LANG_COMMON_AS_HISTORY";
    e_translate[e_translate["LANG_COMMON_AS_SORTADV_ADVANCED"] = 737] = "LANG_COMMON_AS_SORTADV_ADVANCED";
    e_translate[e_translate["LANG_COMMON_AS_SORTADV_FNNONE"] = 738] = "LANG_COMMON_AS_SORTADV_FNNONE";
    e_translate[e_translate["LANG_COMMON_AS_SORTADV_FNDOWN"] = 739] = "LANG_COMMON_AS_SORTADV_FNDOWN";
    e_translate[e_translate["LANG_COMMON_AS_SORTADV_FNDOWNPERSIST"] = 740] = "LANG_COMMON_AS_SORTADV_FNDOWNPERSIST";
    e_translate[e_translate["LANG_COMMON_AS_SORTADV_FNDEATH"] = 741] = "LANG_COMMON_AS_SORTADV_FNDEATH";
    e_translate[e_translate["LANG_COMMON_AS_SORTADV_FNDEATHPERSIST"] = 742] = "LANG_COMMON_AS_SORTADV_FNDEATHPERSIST";
    e_translate[e_translate["LANG_COMMON_AS_SORTADV_FNRESCOUNT"] = 743] = "LANG_COMMON_AS_SORTADV_FNRESCOUNT";
    e_translate[e_translate["LANG_COMMON_AS_SORTADV_FNRESTIME"] = 744] = "LANG_COMMON_AS_SORTADV_FNRESTIME";
    e_translate[e_translate["LANG_COMMON_AS_SORTADV_FNCLEANSE"] = 745] = "LANG_COMMON_AS_SORTADV_FNCLEANSE";
    e_translate[e_translate["LANG_COMMON_AS_SORTADV_FNSTRIP"] = 746] = "LANG_COMMON_AS_SORTADV_FNSTRIP";
    e_translate[e_translate["LANG_COMMON_AS_SORTADV_FNDPSOUTPERSIST"] = 747] = "LANG_COMMON_AS_SORTADV_FNDPSOUTPERSIST";
    e_translate[e_translate["LANG_COMMON_AS_SORTADV_FNDPSINPERSIST"] = 748] = "LANG_COMMON_AS_SORTADV_FNDPSINPERSIST";
    e_translate[e_translate["LANG_COMMON_AS_STATSEXCLUDE"] = 749] = "LANG_COMMON_AS_STATSEXCLUDE";
    e_translate[e_translate["LANG_COMMON_AS_STATSEXCLUDETOOLTIP"] = 750] = "LANG_COMMON_AS_STATSEXCLUDETOOLTIP";
    e_translate[e_translate["LANG_COMMON_AS_STATSEXCLUDEACTIVE"] = 751] = "LANG_COMMON_AS_STATSEXCLUDEACTIVE";
    e_translate[e_translate["LANG_COMMON_AS_STATSEXCLUDEVSPLAYER"] = 752] = "LANG_COMMON_AS_STATSEXCLUDEVSPLAYER";
    e_translate[e_translate["LANG_COMMON_AS_STATSEXCLUDEVSNPC"] = 753] = "LANG_COMMON_AS_STATSEXCLUDEVSNPC";
    e_translate[e_translate["LANG_COMMON_AS_STATSEXCLUDEVSGADGET"] = 754] = "LANG_COMMON_AS_STATSEXCLUDEVSGADGET";
    e_translate[e_translate["LANG_COMMON_AS_STATSEXCLUDEFROMPLAYER"] = 755] = "LANG_COMMON_AS_STATSEXCLUDEFROMPLAYER";
    e_translate[e_translate["LANG_COMMON_AS_STATSEXCLUDEFROMNPC"] = 756] = "LANG_COMMON_AS_STATSEXCLUDEFROMNPC";
    e_translate[e_translate["LANG_COMMON_AS_STATSEXCLUDEFROMGADGET"] = 757] = "LANG_COMMON_AS_STATSEXCLUDEFROMGADGET";
    e_translate[e_translate["LANG_COMMON_AS_OPTSINTERFACETOOLTIP"] = 758] = "LANG_COMMON_AS_OPTSINTERFACETOOLTIP";
    e_translate[e_translate["LANG_COMMON_AS_OPTSLOGSTOOLTIP"] = 759] = "LANG_COMMON_AS_OPTSLOGSTOOLTIP";
    e_translate[e_translate["LANG_COMMON_AS_OPTSEXTRASTOOLTIP"] = 760] = "LANG_COMMON_AS_OPTSEXTRASTOOLTIP";
    e_translate[e_translate["LANG_COMMON_AS_OPTSPLAYERTOOLTIP"] = 761] = "LANG_COMMON_AS_OPTSPLAYERTOOLTIP";
    e_translate[e_translate["LANG_COMMON_AS_OPTSDISPLAYTOOLTIP"] = 762] = "LANG_COMMON_AS_OPTSDISPLAYTOOLTIP";
    e_translate[e_translate["LANG_COMMON_AS_OPTSSTYLETOOLTIP"] = 763] = "LANG_COMMON_AS_OPTSSTYLETOOLTIP";
    e_translate[e_translate["LANG_COMMON_AS_PERSISTRESET"] = 764] = "LANG_COMMON_AS_PERSISTRESET";
    e_translate[e_translate["LANG_COMMON_AS_SORTADV_FNDPSOUTSQ"] = 765] = "LANG_COMMON_AS_SORTADV_FNDPSOUTSQ";
    e_translate[e_translate["LANG_COMMON_AS_SORTADV_FNDPSINSQ"] = 766] = "LANG_COMMON_AS_SORTADV_FNDPSINSQ";
    e_translate[e_translate["LANG_COMMON_AS_ALWAYSSHOWWINDOWS"] = 767] = "LANG_COMMON_AS_ALWAYSSHOWWINDOWS";
    e_translate[e_translate["LANG_COMMON_AS_PERSISTPARTYRESET"] = 768] = "LANG_COMMON_AS_PERSISTPARTYRESET";
    e_translate[e_translate["LANG_COMMON_AS_PERSISTPROFRESET"] = 769] = "LANG_COMMON_AS_PERSISTPROFRESET";
    e_translate[e_translate["LANG_COMMON_AS_DETAILDEFAULT"] = 770] = "LANG_COMMON_AS_DETAILDEFAULT";
    e_translate[e_translate["LANG_COMMON_AS_DETAILDEFAULTTOOLTIP"] = 771] = "LANG_COMMON_AS_DETAILDEFAULTTOOLTIP";
    e_translate[e_translate["LANG_COMMON_AS_SAVEWVWLOGS"] = 772] = "LANG_COMMON_AS_SAVEWVWLOGS";
    e_translate[e_translate["LANG_COMMON_AS_SAVEWVWLOGSTHRESHOLDMIN"] = 773] = "LANG_COMMON_AS_SAVEWVWLOGSTHRESHOLDMIN";
    e_translate[e_translate["LANG_COMMON_AS_SAVEWVWLOGSTHRESHOLDMAX"] = 774] = "LANG_COMMON_AS_SAVEWVWLOGSTHRESHOLDMAX";
    e_translate[e_translate["LANG_COMMON_AS_SAVEWVWLOGSTOOLTIP"] = 775] = "LANG_COMMON_AS_SAVEWVWLOGSTOOLTIP";
    e_translate[e_translate["LANG_COMMON_AS_DMGOUT"] = 776] = "LANG_COMMON_AS_DMGOUT";
    e_translate[e_translate["LANG_COMMON_AS_DMGIN"] = 777] = "LANG_COMMON_AS_DMGIN";
    e_translate[e_translate["LANG_COMMON_AS_SAVEWVWLOGSENEMYMIN"] = 778] = "LANG_COMMON_AS_SAVEWVWLOGSENEMYMIN";
    e_translate[e_translate["LANG_COMMON_AS_ADVANCEDFUNCOPTS"] = 779] = "LANG_COMMON_AS_ADVANCEDFUNCOPTS";
    e_translate[e_translate["LANG_COMMON_AS_SHOWADVANCEDFUNCOPTS"] = 780] = "LANG_COMMON_AS_SHOWADVANCEDFUNCOPTS";
    e_translate[e_translate["LANG_COMMON_AS_SHOWADVANCEDFUNCOPTSTOOLTIP"] = 781] = "LANG_COMMON_AS_SHOWADVANCEDFUNCOPTSTOOLTIP";
    e_translate[e_translate["LANG_COMMON_AS_DRAWCOMPAT"] = 782] = "LANG_COMMON_AS_DRAWCOMPAT";
    e_translate[e_translate["LANG_COMMON_AS_SAVEPROFKEYBINDS"] = 783] = "LANG_COMMON_AS_SAVEPROFKEYBINDS";
    e_translate[e_translate["LANG_COMMON_AS_SAVEPROFKEYBINDSTOOLTIP"] = 784] = "LANG_COMMON_AS_SAVEPROFKEYBINDSTOOLTIP";
    e_translate[e_translate["LANG_COMMON_AS_SHOWTARGETINFO"] = 785] = "LANG_COMMON_AS_SHOWTARGETINFO";
    e_translate[e_translate["LANG_COMMON_AS_TARGETINFOTARGET"] = 786] = "LANG_COMMON_AS_TARGETINFOTARGET";
    e_translate[e_translate["LANG_COMMON_AS_PERSISTBUILDRESET"] = 787] = "LANG_COMMON_AS_PERSISTBUILDRESET";
    e_translate[e_translate["LANG_COMMON_AS_OPTSTIME"] = 788] = "LANG_COMMON_AS_OPTSTIME";
    e_translate[e_translate["LANG_COMMON_AS_OPTSTIMETOOLTIP"] = 789] = "LANG_COMMON_AS_OPTSTIMETOOLTIP";
    e_translate[e_translate["LANG_COMMON_AS_OPTSTIME_USEDMG"] = 790] = "LANG_COMMON_AS_OPTSTIME_USEDMG";
    e_translate[e_translate["LANG_COMMON_AS_DRAWBARS"] = 791] = "LANG_COMMON_AS_DRAWBARS";
    e_translate[e_translate["LANG_COMMON_AS_SUBGROUP"] = 792] = "LANG_COMMON_AS_SUBGROUP";
    e_translate[e_translate["LANG_COMMON_AS_TOPSUBGROUPS"] = 793] = "LANG_COMMON_AS_TOPSUBGROUPS";
    e_translate[e_translate["LANG_COMMON_AS_BUFFTOTAL"] = 794] = "LANG_COMMON_AS_BUFFTOTAL";
    e_translate[e_translate["LANG_COMMON_AS_MAP_MAPASSETTIMEOUT"] = 795] = "LANG_COMMON_AS_MAP_MAPASSETTIMEOUT";
    e_translate[e_translate["LANG_COMMON_AS_MAP_MAPASSETTIMEOUTTOOLTIP"] = 796] = "LANG_COMMON_AS_MAP_MAPASSETTIMEOUTTOOLTIP";
    e_translate[e_translate["LANG_COMMON_AS_MAP_MAPTIMEOUT"] = 797] = "LANG_COMMON_AS_MAP_MAPTIMEOUT";
    e_translate[e_translate["LANG_COMMON_AS_MAP_MAPTIMEOUTTOOLTIP"] = 798] = "LANG_COMMON_AS_MAP_MAPTIMEOUTTOOLTIP";
    e_translate[e_translate["LANG_COMMON_AS_MAP_MODELTIMEOUT"] = 799] = "LANG_COMMON_AS_MAP_MODELTIMEOUT";
    e_translate[e_translate["LANG_COMMON_AS_MAP_MODELTIMEOUTTOOLTIP"] = 800] = "LANG_COMMON_AS_MAP_MODELTIMEOUTTOOLTIP";
    e_translate[e_translate["LANG_COMMON_AS_MAP"] = 801] = "LANG_COMMON_AS_MAP";
    e_translate[e_translate["LANG_COMMON_AS_LOGCH_COMBATLOCAL"] = 802] = "LANG_COMMON_AS_LOGCH_COMBATLOCAL";
    e_translate[e_translate["LANG_COMMON_AS_LOGCH_COMBATAREASELF"] = 803] = "LANG_COMMON_AS_LOGCH_COMBATAREASELF";
    e_translate[e_translate["LANG_COMMON_AS_LOGCH_COMBATAREASQUAD"] = 804] = "LANG_COMMON_AS_LOGCH_COMBATAREASQUAD";
    e_translate[e_translate["LANG_COMMON_AS_LOGCH_ENGINE"] = 805] = "LANG_COMMON_AS_LOGCH_ENGINE";
    e_translate[e_translate["LANG_COMMON_AS_HIDEINCOMBAT"] = 806] = "LANG_COMMON_AS_HIDEINCOMBAT";
    e_translate[e_translate["LANG_COMMON_AS_BEHAVIOR"] = 807] = "LANG_COMMON_AS_BEHAVIOR";
    e_translate[e_translate["LANG_COMMON_AS_NEEDSRESTART"] = 808] = "LANG_COMMON_AS_NEEDSRESTART";
    e_translate[e_translate["LANG_COMMON_AS_HISTORICAL"] = 809] = "LANG_COMMON_AS_HISTORICAL";
    e_translate[e_translate["LANG_COMMON_AS_UEH"] = 810] = "LANG_COMMON_AS_UEH";
    e_translate[e_translate["LANG_COMMON_AS_FONTSIZE"] = 811] = "LANG_COMMON_AS_FONTSIZE";
    e_translate[e_translate["LANG_COMMON_AS_FONTSIZETOOLTIP"] = 812] = "LANG_COMMON_AS_FONTSIZETOOLTIP";
    e_translate[e_translate["LANG_COMMON_AS_LOGSPATH"] = 813] = "LANG_COMMON_AS_LOGSPATH";
    e_translate[e_translate["LANG_COMMON_AS_LOGSPATHTOOLTIP"] = 814] = "LANG_COMMON_AS_LOGSPATHTOOLTIP";
    e_translate[e_translate["LANG_COMMON_AS_BUFFIDS"] = 815] = "LANG_COMMON_AS_BUFFIDS";
    e_translate[e_translate["LANG_COMMON_AS_BUFFIDSAPPLY"] = 816] = "LANG_COMMON_AS_BUFFIDSAPPLY";
    e_translate[e_translate["LANG_COMMON_AS_BOSSIDS"] = 817] = "LANG_COMMON_AS_BOSSIDS";
    e_translate[e_translate["LANG_COMMON_AS_BOSSIDSTOOLTIP"] = 818] = "LANG_COMMON_AS_BOSSIDSTOOLTIP";
    e_translate[e_translate["LANG_COMMON_AS_BOSSIDSAPPLY"] = 819] = "LANG_COMMON_AS_BOSSIDSAPPLY";
    e_translate[e_translate["LANG_COMMON_AS_KEYS"] = 820] = "LANG_COMMON_AS_KEYS";
    e_translate[e_translate["LANG_COMMON_AS_KEYS_UNSET"] = 821] = "LANG_COMMON_AS_KEYS_UNSET";
    e_translate[e_translate["LANG_COMMON_AS_KEYS_MOD1"] = 822] = "LANG_COMMON_AS_KEYS_MOD1";
    e_translate[e_translate["LANG_COMMON_AS_KEYS_MOD2"] = 823] = "LANG_COMMON_AS_KEYS_MOD2";
    e_translate[e_translate["LANG_COMMON_AS_KEYS_MODMULTI"] = 824] = "LANG_COMMON_AS_KEYS_MODMULTI";
    e_translate[e_translate["LANG_COMMON_AS_KEYS_HIDE"] = 825] = "LANG_COMMON_AS_KEYS_HIDE";
    e_translate[e_translate["LANG_COMMON_AS_KEYS_OPTIONS"] = 826] = "LANG_COMMON_AS_KEYS_OPTIONS";
    e_translate[e_translate["LANG_COMMON_AS_KEYS_CHCLI"] = 827] = "LANG_COMMON_AS_KEYS_CHCLI";
    e_translate[e_translate["LANG_COMMON_AS_KEYS_BUFFS"] = 828] = "LANG_COMMON_AS_KEYS_BUFFS";
    e_translate[e_translate["LANG_COMMON_AS_KEYS_SELF"] = 829] = "LANG_COMMON_AS_KEYS_SELF";
    e_translate[e_translate["LANG_COMMON_AS_LOG_TO_FILE"] = 830] = "LANG_COMMON_AS_LOG_TO_FILE";
    e_translate[e_translate["LANG_COMMON_AS_DODGEUPTIME"] = 831] = "LANG_COMMON_AS_DODGEUPTIME";
    e_translate[e_translate["LANG_COMMON_AS_SORTADV_FNSTRIPPERSIST"] = 832] = "LANG_COMMON_AS_SORTADV_FNSTRIPPERSIST";
    e_translate[e_translate["LANG_COMMON_AS_SORTADV_FNCLEANSEPERSIST"] = 833] = "LANG_COMMON_AS_SORTADV_FNCLEANSEPERSIST";
    e_translate[e_translate["LANG_COMMON_AS_SORTADV_UNITSPERSEC"] = 834] = "LANG_COMMON_AS_SORTADV_UNITSPERSEC";
    e_translate[e_translate["LANG_COMMON_AS_SORTADV_UNITSSECS"] = 835] = "LANG_COMMON_AS_SORTADV_UNITSSECS";
    e_translate[e_translate["LANG_COMMON_AS_WINDOW_POSITION"] = 836] = "LANG_COMMON_AS_WINDOW_POSITION";
    e_translate[e_translate["LANG_COMMON_AS_WINDOW_POSITIONTOOLTIP"] = 837] = "LANG_COMMON_AS_WINDOW_POSITIONTOOLTIP";
    e_translate[e_translate["LANG_COMMON_AS_WINDOW_USE_FIXED"] = 838] = "LANG_COMMON_AS_WINDOW_USE_FIXED";
    e_translate[e_translate["LANG_COMMON_AS_WINDOW_OFFS_POINT_TL"] = 839] = "LANG_COMMON_AS_WINDOW_OFFS_POINT_TL";
    e_translate[e_translate["LANG_COMMON_AS_WINDOW_OFFS_POINT_TR"] = 840] = "LANG_COMMON_AS_WINDOW_OFFS_POINT_TR";
    e_translate[e_translate["LANG_COMMON_AS_WINDOW_OFFS_POINT_BL"] = 841] = "LANG_COMMON_AS_WINDOW_OFFS_POINT_BL";
    e_translate[e_translate["LANG_COMMON_AS_WINDOW_OFFS_POINT_BR"] = 842] = "LANG_COMMON_AS_WINDOW_OFFS_POINT_BR";
    e_translate[e_translate["LANG_COMMON_AS_WINDOW_OFFS_X"] = 843] = "LANG_COMMON_AS_WINDOW_OFFS_X";
    e_translate[e_translate["LANG_COMMON_AS_WINDOW_OFFS_Y"] = 844] = "LANG_COMMON_AS_WINDOW_OFFS_Y";
    e_translate[e_translate["LANG_COMMON_AS_WINDOW_USE_RELATIVE"] = 845] = "LANG_COMMON_AS_WINDOW_USE_RELATIVE";
    e_translate[e_translate["LANG_COMMON_AS_WINDOW_RELATIVE_WINDOW"] = 846] = "LANG_COMMON_AS_WINDOW_RELATIVE_WINDOW";
    e_translate[e_translate["LANG_COMMON_AS_WINDOW_RELATIVE_POINTATTACHTO"] = 847] = "LANG_COMMON_AS_WINDOW_RELATIVE_POINTATTACHTO";
    e_translate[e_translate["LANG_COMMON_AS_WINDOW_RELATIVE_POINTATTACHFROM"] = 848] = "LANG_COMMON_AS_WINDOW_RELATIVE_POINTATTACHFROM";
    e_translate[e_translate["LANG_COMMON_AS_WINDOW_USE_SURROUND"] = 849] = "LANG_COMMON_AS_WINDOW_USE_SURROUND";
    e_translate[e_translate["LANG_COMMON_AS_WINDOW_RESETALL"] = 850] = "LANG_COMMON_AS_WINDOW_RESETALL";
    e_translate[e_translate["LANG_COMMON_AS_TTS"] = 851] = "LANG_COMMON_AS_TTS";
    e_translate[e_translate["LANG_COMMON_AS_SEPARATE_EXCLUDES"] = 852] = "LANG_COMMON_AS_SEPARATE_EXCLUDES";
    e_translate[e_translate["LANG_COMMON_AS_SEPARATE_EXCLUDESTOOLTIP"] = 853] = "LANG_COMMON_AS_SEPARATE_EXCLUDESTOOLTIP";
    e_translate[e_translate["LANG_COMMON_AS_GLOBAL_EXCLUDESTOOLTIP"] = 854] = "LANG_COMMON_AS_GLOBAL_EXCLUDESTOOLTIP";
    e_translate[e_translate["LANG_COMMON_AS_SORTADV_FNDISTTOTAGPERSIST"] = 855] = "LANG_COMMON_AS_SORTADV_FNDISTTOTAGPERSIST";
    e_translate[e_translate["LANG_COMMON_AS_SORTADV_FNDISTTOTAGSQ"] = 856] = "LANG_COMMON_AS_SORTADV_FNDISTTOTAGSQ";
    e_translate[e_translate["LANG_COMMON_AS_WVW"] = 857] = "LANG_COMMON_AS_WVW";
    e_translate[e_translate["LANG_COMMON_AS_PVE"] = 858] = "LANG_COMMON_AS_PVE";
    e_translate[e_translate["LANG_COMMON_AS_SORTADVTOOLTIPNONE"] = 859] = "LANG_COMMON_AS_SORTADVTOOLTIPNONE";
    e_translate[e_translate["LANG_COMMON_AS_SORTADVTOOLTIPSQCURRENT"] = 860] = "LANG_COMMON_AS_SORTADVTOOLTIPSQCURRENT";
    e_translate[e_translate["LANG_COMMON_AS_SORTADVTOOLTIPAVERAGED"] = 861] = "LANG_COMMON_AS_SORTADVTOOLTIPAVERAGED";
    e_translate[e_translate["LANG_COMMON_AS_SORTADVTOOLTIPPLAYER"] = 862] = "LANG_COMMON_AS_SORTADVTOOLTIPPLAYER";
    e_translate[e_translate["LANG_COMMON_AS_PERSISTTOOLTIP"] = 863] = "LANG_COMMON_AS_PERSISTTOOLTIP";
    e_translate[e_translate["LANG_COMMON_AS_SORTADV_FNKILLSOUTPERSIST"] = 864] = "LANG_COMMON_AS_SORTADV_FNKILLSOUTPERSIST";
    e_translate[e_translate["LANG_COMMON_AS_SORTADV_FNKILLSOUTSQ"] = 865] = "LANG_COMMON_AS_SORTADV_FNKILLSOUTSQ";
    e_translate[e_translate["LANG_COMMON_AS_SORTADV_FNDOWNSOUTPERSIST"] = 866] = "LANG_COMMON_AS_SORTADV_FNDOWNSOUTPERSIST";
    e_translate[e_translate["LANG_COMMON_AS_SORTADV_FNDOWNSOUTSQ"] = 867] = "LANG_COMMON_AS_SORTADV_FNDOWNSOUTSQ";
    e_translate[e_translate["LANG_COMMON_AS_HIGHLIGHTLOADINGRED"] = 868] = "LANG_COMMON_AS_HIGHLIGHTLOADINGRED";
    e_translate[e_translate["LANG_COMMON_AS_PERSIST"] = 869] = "LANG_COMMON_AS_PERSIST";
    e_translate[e_translate["LANG_COMMON_AS_GLOBAL_OPTSSLIDINGTOOLTIP"] = 870] = "LANG_COMMON_AS_GLOBAL_OPTSSLIDINGTOOLTIP";
    e_translate[e_translate["LANG_COMMON_AS_SEPARATE_OPTSSLIDINGTOOLTIP"] = 871] = "LANG_COMMON_AS_SEPARATE_OPTSSLIDINGTOOLTIP";
    e_translate[e_translate["LANG_COMMON_AS_OPTSSLIDING"] = 872] = "LANG_COMMON_AS_OPTSSLIDING";
    e_translate[e_translate["LANG_COMMON_AS_OPTSAPPEARANCETOOLTIP"] = 873] = "LANG_COMMON_AS_OPTSAPPEARANCETOOLTIP";
    e_translate[e_translate["LANG_COMMON_AS_COPYSELFTOP"] = 874] = "LANG_COMMON_AS_COPYSELFTOP";
    e_translate[e_translate["LANG_COMMON_AS_HIDESELF"] = 875] = "LANG_COMMON_AS_HIDESELF";
    e_translate[e_translate["LANG_COMMON_AS_COLOURSARCCHCLI"] = 876] = "LANG_COMMON_AS_COLOURSARCCHCLI";
    e_translate[e_translate["LANG_COMMON_AS_COLOURSARCBUFFS"] = 877] = "LANG_COMMON_AS_COLOURSARCBUFFS";
    e_translate[e_translate["LANG_COMMON_AS_COLOURSARCLISTS"] = 878] = "LANG_COMMON_AS_COLOURSARCLISTS";
    e_translate[e_translate["LANG_COMMON_AS_DEFENSIVE"] = 879] = "LANG_COMMON_AS_DEFENSIVE";
    e_translate[e_translate["LANG_COMMON_AS_DRAWDAMAGE"] = 880] = "LANG_COMMON_AS_DRAWDAMAGE";
    e_translate[e_translate["LANG_COMMON_AS_RESETSTYLE"] = 881] = "LANG_COMMON_AS_RESETSTYLE";
    e_translate[e_translate["LANG_COMMON_AS_SORTADV_FNBREAKBARPERSIST"] = 882] = "LANG_COMMON_AS_SORTADV_FNBREAKBARPERSIST";
    e_translate[e_translate["LANG_COMMON_AS_SORTADV_FNBREAKBARSQ"] = 883] = "LANG_COMMON_AS_SORTADV_FNBREAKBARSQ";
    e_translate[e_translate["LANG_COMMON_AS_LOGCH_EXTENSION"] = 884] = "LANG_COMMON_AS_LOGCH_EXTENSION";
    e_translate[e_translate["LANG_COMMON_AS_CUSTOMNAME"] = 885] = "LANG_COMMON_AS_CUSTOMNAME";
    e_translate[e_translate["LANG_COMMON_AS_MANUAL"] = 886] = "LANG_COMMON_AS_MANUAL";
    e_translate[e_translate["LANG_COMMON_AS_CLICKMODTOOLTIP"] = 887] = "LANG_COMMON_AS_CLICKMODTOOLTIP";
    e_translate[e_translate["LANG_COMMON_AS_PINGHIGHLIGHTSPIKE"] = 888] = "LANG_COMMON_AS_PINGHIGHLIGHTSPIKE";
    e_translate[e_translate["LANG_COMMON_AS_SERVERTICKHIGHLIGHTSPIKE"] = 889] = "LANG_COMMON_AS_SERVERTICKHIGHLIGHTSPIKE";
    e_translate[e_translate["LANG_COMMON_AS_METRICFORMATTOOLTIP"] = 890] = "LANG_COMMON_AS_METRICFORMATTOOLTIP";
    e_translate[e_translate["LANG_COMMON_AS_METRICFORMAT"] = 891] = "LANG_COMMON_AS_METRICFORMAT";
    e_translate[e_translate["LANG_COMMON_AS_PROFICONS"] = 892] = "LANG_COMMON_AS_PROFICONS";
    e_translate[e_translate["LANG_COMMON_AS_SUBGROUPAVERAGE"] = 893] = "LANG_COMMON_AS_SUBGROUPAVERAGE";
    e_translate[e_translate["LANG_COMMON_AS_MAXACTIVEESTACKS"] = 894] = "LANG_COMMON_AS_MAXACTIVEESTACKS";
    e_translate[e_translate["LANG_COMMON_AS_ONETARGETNOMINAL"] = 895] = "LANG_COMMON_AS_ONETARGETNOMINAL";
    e_translate[e_translate["LANG_COMMON_AS_FIVETARGETNOMINAL"] = 896] = "LANG_COMMON_AS_FIVETARGETNOMINAL";
    e_translate[e_translate["LANG_COMMON_AS_TENTARGETNOMINAL"] = 897] = "LANG_COMMON_AS_TENTARGETNOMINAL";
    e_translate[e_translate["LANG_COMMON_AS_PROFICONSTOOLTIP"] = 898] = "LANG_COMMON_AS_PROFICONSTOOLTIP";
    e_translate[e_translate["LANG_COMMON_AS_ERRORS"] = 899] = "LANG_COMMON_AS_ERRORS";
    e_translate[e_translate["LANG_COMMON_AS_BUFFLISTSTOOLTIP"] = 900] = "LANG_COMMON_AS_BUFFLISTSTOOLTIP";
    e_translate[e_translate["LANG_COMMON_AS_BUFFLIST"] = 901] = "LANG_COMMON_AS_BUFFLIST";
    e_translate[e_translate["LANG_COMMON_AS_LIMITNOMINALMAXIMUM"] = 902] = "LANG_COMMON_AS_LIMITNOMINALMAXIMUM";
    e_translate[e_translate["LANG_COMMON_AS_SHOWTABS"] = 903] = "LANG_COMMON_AS_SHOWTABS";
    e_translate[e_translate["LANG_COMMON_AS_OUT"] = 904] = "LANG_COMMON_AS_OUT";
    e_translate[e_translate["LANG_COMMON_AS_LIMITNOMINALMINIMUM"] = 905] = "LANG_COMMON_AS_LIMITNOMINALMINIMUM";
    e_translate[e_translate["LANG_COMMON_AS_SQSTAT_TITLE"] = 906] = "LANG_COMMON_AS_SQSTAT_TITLE";
    e_translate[e_translate["LANG_COMMON_AS_SQSTAT_DPSOUT"] = 907] = "LANG_COMMON_AS_SQSTAT_DPSOUT";
    e_translate[e_translate["LANG_COMMON_AS_SQSTAT_DPSIN"] = 908] = "LANG_COMMON_AS_SQSTAT_DPSIN";
    e_translate[e_translate["LANG_COMMON_AS_SQSTAT_CLEANSEOUT"] = 909] = "LANG_COMMON_AS_SQSTAT_CLEANSEOUT";
    e_translate[e_translate["LANG_COMMON_AS_SQSTAT_CLEANSEIN"] = 910] = "LANG_COMMON_AS_SQSTAT_CLEANSEIN";
    e_translate[e_translate["LANG_COMMON_AS_SQSTAT_STRIPOUT"] = 911] = "LANG_COMMON_AS_SQSTAT_STRIPOUT";
    e_translate[e_translate["LANG_COMMON_AS_SQSTAT_STRIPIN"] = 912] = "LANG_COMMON_AS_SQSTAT_STRIPIN";
    e_translate[e_translate["LANG_COMMON_AS_SQSTAT_BUFFOUT"] = 913] = "LANG_COMMON_AS_SQSTAT_BUFFOUT";
    e_translate[e_translate["LANG_COMMON_AS_SQSTAT_BUFFIN"] = 914] = "LANG_COMMON_AS_SQSTAT_BUFFIN";
    e_translate[e_translate["LANG_COMMON_AS_SQSTAT_SQUADROWS"] = 915] = "LANG_COMMON_AS_SQSTAT_SQUADROWS";
    e_translate[e_translate["LANG_COMMON_AS_SQSTAT_MAX"] = 916] = "LANG_COMMON_AS_SQSTAT_MAX";
    e_translate[e_translate["LANG_COMMON_AS_SQSTAT_TIMING"] = 917] = "LANG_COMMON_AS_SQSTAT_TIMING";
    e_translate[e_translate["LANG_COMMON_AS_SQSTAT_TIMINGTOOLTIP"] = 918] = "LANG_COMMON_AS_SQSTAT_TIMINGTOOLTIP";
    e_translate[e_translate["LANG_COMMON_AS_KEYS_GRAPHS"] = 919] = "LANG_COMMON_AS_KEYS_GRAPHS";
    e_translate[e_translate["LANG_COMMON_AS_DEFAULTSQUADLOGNAME"] = 920] = "LANG_COMMON_AS_DEFAULTSQUADLOGNAME";
    e_translate[e_translate["LANG_COMMON_AS_TARGETHISTMBUSE"] = 921] = "LANG_COMMON_AS_TARGETHISTMBUSE";
    e_translate[e_translate["LANG_COMMON_AS_OPTSHISTORICALTOOLTIP"] = 922] = "LANG_COMMON_AS_OPTSHISTORICALTOOLTIP";
    e_translate[e_translate["LANG_COMMON_AS_TIMESTRIDE"] = 923] = "LANG_COMMON_AS_TIMESTRIDE";
    e_translate[e_translate["LANG_COMMON_AS_SQSTAT_LASTMS"] = 924] = "LANG_COMMON_AS_SQSTAT_LASTMS";
    e_translate[e_translate["LANG_COMMON_AS_MINLOGDURATION"] = 925] = "LANG_COMMON_AS_MINLOGDURATION";
    e_translate[e_translate["LANG_COMMON_AS_SQSTAT_HIDEPLAYER"] = 926] = "LANG_COMMON_AS_SQSTAT_HIDEPLAYER";
    e_translate[e_translate["LANG_COMMON_AS_SQSTAT_HIDEPROF"] = 927] = "LANG_COMMON_AS_SQSTAT_HIDEPROF";
    e_translate[e_translate["LANG_COMMON_AS_SQSTAT_UNHIDEALL"] = 928] = "LANG_COMMON_AS_SQSTAT_UNHIDEALL";
    e_translate[e_translate["LANG_COMMON_AS_SQSTAT_MULTIPLEGRAPHWARNING"] = 929] = "LANG_COMMON_AS_SQSTAT_MULTIPLEGRAPHWARNING";
    e_translate[e_translate["LANG_COMMON_AS_PROF_UNKNOWN"] = 930] = "LANG_COMMON_AS_PROF_UNKNOWN";
    e_translate[e_translate["LANG_COMMON_AS_PROF_GUARDIAN"] = 931] = "LANG_COMMON_AS_PROF_GUARDIAN";
    e_translate[e_translate["LANG_COMMON_AS_PROF_WARRIOR"] = 932] = "LANG_COMMON_AS_PROF_WARRIOR";
    e_translate[e_translate["LANG_COMMON_AS_PROF_ENGINEER"] = 933] = "LANG_COMMON_AS_PROF_ENGINEER";
    e_translate[e_translate["LANG_COMMON_AS_PROF_RANGER"] = 934] = "LANG_COMMON_AS_PROF_RANGER";
    e_translate[e_translate["LANG_COMMON_AS_PROF_THIEF"] = 935] = "LANG_COMMON_AS_PROF_THIEF";
    e_translate[e_translate["LANG_COMMON_AS_PROF_ELEMENTALIST"] = 936] = "LANG_COMMON_AS_PROF_ELEMENTALIST";
    e_translate[e_translate["LANG_COMMON_AS_PROF_MESMER"] = 937] = "LANG_COMMON_AS_PROF_MESMER";
    e_translate[e_translate["LANG_COMMON_AS_PROF_NECROMANCER"] = 938] = "LANG_COMMON_AS_PROF_NECROMANCER";
    e_translate[e_translate["LANG_COMMON_AS_PROF_REVENANT"] = 939] = "LANG_COMMON_AS_PROF_REVENANT";
    e_translate[e_translate["LANG_COMMON_AS_SQSTAT_GRANULARITY"] = 940] = "LANG_COMMON_AS_SQSTAT_GRANULARITY";
    e_translate[e_translate["LANG_COMMON_AS_SQSTAT_ROLLING"] = 941] = "LANG_COMMON_AS_SQSTAT_ROLLING";
    e_translate[e_translate["LANG_COMMON_AS_SQSTAT_ROLLINGTOOLTIP"] = 942] = "LANG_COMMON_AS_SQSTAT_ROLLINGTOOLTIP";
    e_translate[e_translate["LANG_COMMON_AS_SQSTAT_NONSELECTALPHA"] = 943] = "LANG_COMMON_AS_SQSTAT_NONSELECTALPHA";
    e_translate[e_translate["LANG_COMMON_AS_SQSTAT_NONHIGHLIGHTALPHA"] = 944] = "LANG_COMMON_AS_SQSTAT_NONHIGHLIGHTALPHA";
    e_translate[e_translate["LANG_COMMON_AS_SQSTAT_AUTOSELECTSELF"] = 945] = "LANG_COMMON_AS_SQSTAT_AUTOSELECTSELF";
    e_translate[e_translate["LANG_COMMON_AS_SQSTAT_BUFFSELECTTOOLTIP"] = 946] = "LANG_COMMON_AS_SQSTAT_BUFFSELECTTOOLTIP";
    e_translate[e_translate["LANG_COMMON_AS_SQSTAT_BUFFSELECT"] = 947] = "LANG_COMMON_AS_SQSTAT_BUFFSELECT";
    e_translate[e_translate["LANG_COMMON_AS_SQSTAT_LIST"] = 948] = "LANG_COMMON_AS_SQSTAT_LIST";
    e_translate[e_translate["LANG_COMMON_AS_SQSTAT_HIGHLIGHTUSEPROF"] = 949] = "LANG_COMMON_AS_SQSTAT_HIGHLIGHTUSEPROF";
    e_translate[e_translate["LANG_COMMON_AS_SQSTAT_USEPLAYERUNIQUECOLOURS"] = 950] = "LANG_COMMON_AS_SQSTAT_USEPLAYERUNIQUECOLOURS";
    e_translate[e_translate["LANG_COMMON_AS_COLOURSARCGRAPHS"] = 951] = "LANG_COMMON_AS_COLOURSARCGRAPHS";
    e_translate[e_translate["LANG_COMMON_AS_TIMERANGE"] = 952] = "LANG_COMMON_AS_TIMERANGE";
    e_translate[e_translate["LANG_COMMON_AS_HOSTILE"] = 953] = "LANG_COMMON_AS_HOSTILE";
    // @ts-ignore
    e_translate[e_translate["LANG_COMMON_AS_FRIENDLY"] = 954] = "LANG_COMMON_AS_FRIENDLY";
    e_translate[e_translate["LANG_COMMON_AS_RANGE"] = 955] = "LANG_COMMON_AS_RANGE";
    e_translate[e_translate["LANG_COMMON_AS_BUFFIN"] = 956] = "LANG_COMMON_AS_BUFFIN";
    e_translate[e_translate["LANG_COMMON_AS_BUFFOUT"] = 957] = "LANG_COMMON_AS_BUFFOUT";
    e_translate[e_translate["LANG_COMMON_AS_SHOWHIDDEN"] = 958] = "LANG_COMMON_AS_SHOWHIDDEN";
    e_translate[e_translate["LANG_COMMON_AS_HIDDEN"] = 959] = "LANG_COMMON_AS_HIDDEN";
    e_translate[e_translate["LANG_COMMON_AS_SHOWTARGET"] = 960] = "LANG_COMMON_AS_SHOWTARGET";
    e_translate[e_translate["LANG_COMMON_AS_SQSTAT_DPSOUT_TARGET"] = 961] = "LANG_COMMON_AS_SQSTAT_DPSOUT_TARGET";
    e_translate[e_translate["LANG_COMMON_AS_SQSTAT_DPSIN_TARGET"] = 962] = "LANG_COMMON_AS_SQSTAT_DPSIN_TARGET";
    e_translate[e_translate["LANG_COMMON_AS_SUBGROUPAVGONLY"] = 963] = "LANG_COMMON_AS_SUBGROUPAVGONLY";
    e_translate[e_translate["LANG_COMMON_AS_NOALLFLOATTEXT"] = 964] = "LANG_COMMON_AS_NOALLFLOATTEXT";
    e_translate[e_translate["LANG_COMMON_AS_SHOWMINMAXINDICATOR"] = 965] = "LANG_COMMON_AS_SHOWMINMAXINDICATOR";
    e_translate[e_translate["LANG_COMMON_AS_SAVEWVWLOGSTHRESHOLDSQUADPCT"] = 966] = "LANG_COMMON_AS_SAVEWVWLOGSTHRESHOLDSQUADPCT";
    e_translate[e_translate["LANG_COMMON_AS_CSKSELFCAST"] = 967] = "LANG_COMMON_AS_CSKSELFCAST";
    e_translate[e_translate["LANG_COMMON_AS_CSKENEMYCAST"] = 968] = "LANG_COMMON_AS_CSKENEMYCAST";
    e_translate[e_translate["LANG_COMMON_AS_SUMMARYONACTIVATECOUNT"] = 969] = "LANG_COMMON_AS_SUMMARYONACTIVATECOUNT";
    e_translate[e_translate["LANG_COMMON_AS_SUMMARYSTRIKETOTAL"] = 970] = "LANG_COMMON_AS_SUMMARYSTRIKETOTAL";
    e_translate[e_translate["LANG_COMMON_AS_SUMMARYCONDITIONTOTAL"] = 971] = "LANG_COMMON_AS_SUMMARYCONDITIONTOTAL";
    e_translate[e_translate["LANG_COMMON_AS_PADSPACES"] = 972] = "LANG_COMMON_AS_PADSPACES";
    e_translate[e_translate["LANG_COMMON_AS_PERSISTMAPRESET"] = 973] = "LANG_COMMON_AS_PERSISTMAPRESET";
    e_translate[e_translate["LANG_COMMON_AS_SORTADV_FNDOWNCONTRIBPERSIST"] = 974] = "LANG_COMMON_AS_SORTADV_FNDOWNCONTRIBPERSIST";
    e_translate[e_translate["LANG_COMMON_AS_SORTADV_FNDOWNCONTRIBSQ"] = 975] = "LANG_COMMON_AS_SORTADV_FNDOWNCONTRIBSQ";
    e_translate[e_translate["LANG_COMMON_AS_SQUADSTATS"] = 976] = "LANG_COMMON_AS_SQUADSTATS";
    e_translate[e_translate["LANG_COMMON_AS_PERSISTSTATS"] = 977] = "LANG_COMMON_AS_PERSISTSTATS";
    e_translate[e_translate["LANG_COMMON_AS_WVWINACTIVE"] = 978] = "LANG_COMMON_AS_WVWINACTIVE";
    /* end */
    e_translate[e_translate["LANG_END"] = 979] = "LANG_END";
})(e_translate || (e_translate = {}));
exports.e_translate = e_translate;
;
const lang = {
    /* common: professions */
    /**
 * Gdn
 */
    LANG_COMMON_PROF_GUARDIAN: "Gdn",
    /**
 * Dgh
 */
    LANG_COMMON_PROF_DRAGONHUNTER: "Dgh",
    /**
 * War
 */
    LANG_COMMON_PROF_WARRIOR: "War",
    /**
 * Brs
 */
    LANG_COMMON_PROF_BERSERKER: "Brs",
    /**
 * Eng
 */
    LANG_COMMON_PROF_ENGINEER: "Eng",
    /**
 * Scr
 */
    LANG_COMMON_PROF_SCRAPPER: "Scr",
    /**
 * Rgr
 */
    LANG_COMMON_PROF_RANGER: "Rgr",
    /**
 * Dru
 */
    LANG_COMMON_PROF_DRUID: "Dru",
    /**
 * Thf
 */
    LANG_COMMON_PROF_THIEF: "Thf",
    /**
 * Dar
 */
    LANG_COMMON_PROF_DAREDEVIL: "Dar",
    /**
 * Ele
 */
    LANG_COMMON_PROF_ELEMENTALIST: "Ele",
    /**
 * Tmp
 */
    LANG_COMMON_PROF_TEMPEST: "Tmp",
    /**
 * Mes
 */
    LANG_COMMON_PROF_MESMER: "Mes",
    /**
 * Chr
 */
    LANG_COMMON_PROF_CHRONOMANCER: "Chr",
    /**
 * Nec
 */
    LANG_COMMON_PROF_NECROMANCER: "Nec",
    /**
 * Rea
 */
    LANG_COMMON_PROF_REAPER: "Rea",
    /**
 * Rev
 */
    LANG_COMMON_PROF_RECKONER: "Rev",
    /**
 * Her
 */
    LANG_COMMON_PROF_HERALD: "Her",
    /**
 * Fbd
 */
    LANG_COMMON_PROF_FIREBRAND: "Fbd",
    /**
 * Spb
 */
    LANG_COMMON_PROF_SPELLBREAKER: "Spb",
    /**
 * Hls
 */
    LANG_COMMON_PROF_HOLOSMITH: "Hls",
    /**
 * Slb
 */
    LANG_COMMON_PROF_SOULBEAST: "Slb",
    /**
 * Ded
 */
    LANG_COMMON_PROF_DEADEYE: "Ded",
    /**
 * Wea
 */
    LANG_COMMON_PROF_WEAVER: "Wea",
    /**
 * Mir
 */
    LANG_COMMON_PROF_MIRAGE: "Mir",
    /**
 * Scg
 */
    LANG_COMMON_PROF_SCOURGE: "Scg",
    /**
 * Ren
 */
    LANG_COMMON_PROF_RENEGADE: "Ren",
    /* common: skill itemization */
    /**
 * activations
 */
    LANG_COMMON_SKILLS_ACTIVATIONS: "activations",
    /**
 * cancels
 */
    LANG_COMMON_SKILLS_CANCELS: "cancels",
    /**
 * time wasted
 */
    LANG_COMMON_SKILLS_WASTED: "time wasted",
    /**
 * hits (cmprs)
 */
    LANG_COMMON_SKILLS_HITSCOMPRESS: "hits (cmprs)",
    /**
 * hits (dmg)
 */
    LANG_COMMON_SKILLS_HITSTOTAL: "hits (dmg)",
    /**
 * over 90
 */
    LANG_COMMON_SKILLS_NINETY: "over 90",
    /**
 * under 50
 */
    LANG_COMMON_SKILLS_FIFTY: "under 50",
    /**
 * moving
 */
    LANG_COMMON_SKILLS_MOVING: "moving",
    /**
 * flanking
 */
    LANG_COMMON_SKILLS_FLANKING: "flanking",
    /**
 * crit
 */
    LANG_COMMON_SKILLS_CRITS: "crit",
    /**
 * total
 */
    LANG_COMMON_SKILLS_VALUE: "total",
    /**
 * min
 */
    LANG_COMMON_SKILLS_MIN: "min",
    /**
 * avg
 */
    LANG_COMMON_SKILLS_AVG: "avg",
    /**
 * max
 */
    LANG_COMMON_SKILLS_MAX: "max",
    /**
 * apx dmg
 */
    LANG_COMMON_SKILLS_APXDMG: "apx dmg",
    /**
 * overstack
 */
    LANG_COMMON_SKILLS_OVERSTACK: "overstack",
    /**
 * No skills logged
 */
    LANG_COMMON_SKILLS_NOSKILLS: "No skills logged",
    /**
 * removed
 */
    LANG_COMMON_SKILLS_REMOVED: "removed",
    /**
 * resisted
 */
    LANG_COMMON_SKILLS_RESISTED: "resisted",
    /**
 * glance
 */
    LANG_COMMON_SKILLS_GLANCE: "glance",
    /**
 * misses
 */
    LANG_COMMON_SKILLS_MISSES: "misses",
    /**
 * No targets logged
 */
    LANG_COMMON_SKILLS_NOTARGETS: "No targets logged",
    /* common: skills 2 */
    /**
 * No events
 */
    LANG_COMMON_SKILLS2_NOEVENTS: "No events",
    /**
 * shielded
 */
    LANG_COMMON_SKILLS2_SHIELDED: "shielded",
    /**
 * hits (all)
 */
    LANG_COMMON_SKILLS2_HITSANY: "hits (all)",
    /**
 * dmg (phys)
 */
    LANG_COMMON_SKILLS2_DMGPHYS: "dmg (phys)",
    /**
 * dmg (buff)
 */
    LANG_COMMON_SKILLS2_DMGBUFF: "dmg (buff)",
    /**
 * time cast
 */
    LANG_COMMON_SKILLS2_CHANNELED: "time cast",
    /**
 * reduced
 */
    LANG_COMMON_SKILLS2_PROTECTED: "reduced",
    /**
 * killed
 */
    LANG_COMMON_SKILLS2_KILLINGBLOWS: "killed",
    /**
 * downed
 */
    LANG_COMMON_SKILLS2_DOWNEDS: "downed",
    /**
 * shield total
 */
    LANG_COMMON_SKILLS2_VALUESHIELD: "shield total",
    /**
 * blocks
 */
    LANG_COMMON_SKILLS2_BLOCKS: "blocks",
    /**
 * evades
 */
    LANG_COMMON_SKILLS2_EVADES: "evades",
    /**
 * absorbs
 */
    LANG_COMMON_SKILLS2_ABSORBS: "absorbs",
    /**
 * zeroes
 */
    LANG_COMMON_SKILLS2_ZEROES: "zeroes",
    /* common: custom skills */
    /**
 * Dodge
 */
    LANG_COMMON_CSK_DODGE: "Dodge",
    /**
 * Breakbar Change
 */
    LANG_COMMON_CSK_BREAKBAR: "Breakbar Change",
    /* panels: dps */
    /**
 * Self Stats
 */
    LANG_PAN_PERSONALDPS_HEADER: "Self Stats",
    /**
 * damage
 */
    LANG_PAN_PERSONALDPS_DAMAGE: "damage",
    /**
 * healing
 */
    LANG_PAN_PERSONALDPS_HEALING: "healing",
    /**
 * current
 */
    LANG_PAN_PERSONALDPS_HISTLEFT: "current",
    /**
 * current
 */
    LANG_PAN_PERSONALDPS_HISTRIGHT: "current",
    /**
 * barrier
 */
    LANG_PAN_PERSONALDPS_SHIELDS: "barrier",
    /* panels: skills */
    /**
 * Self Skills
 */
    LANG_PAN_PERSONALSKILLS_HEADER: "Self Skills",
    /* panels: healthbar */
    /**
 * Healthbar
 */
    LANG_PAN_HEALTHBAR_HEADER: "Healthbar",
    /* panels: chcli */
    /**
 * Area Stats
 */
    LANG_PAN_CHCLI_HEADER: "Area Stats",
    /**
 * Disabled on out-of-party agents
 */
    LANG_PAN_CHCLI_DISABLED: "Disabled on out-of-party agents",
    /**
 * No players in range
 */
    LANG_PAN_CHCLI_NOPLAYERS: "No players in range",
    /**
 * current
 */
    LANG_PAN_CHCLI_HISTLEFT: "current",
    /**
 * current
 */
    LANG_PAN_CHCLI_HISTRIGHT: "current",
    /* panels: summary */
    /**
 * Summary
 */
    LANG_PAN_SUMMARY_HEADER: "Summary",
    /**
 * combat time
 */
    LANG_PAN_SUMMARY_CBTTIME: "combat time",
    /**
 * dps out
 */
    LANG_PAN_SUMMARY_ADPSOUT: "dps out",
    /**
 * dps in
 */
    LANG_PAN_SUMMARY_ADPSIN: "dps in",
    /**
 * crit
 */
    LANG_PAN_SUMMARY_CRITPCT: "crit",
    /**
 * ninety
 */
    LANG_PAN_SUMMARY_NINETYPCT: "ninety",
    /**
 * fifty
 */
    LANG_PAN_SUMMARY_FIFTYPCT: "fifty",
    /**
 * moving
 */
    LANG_PAN_SUMMARY_MOVINGPCT: "moving",
    /**
 * flank
 */
    LANG_PAN_SUMMARY_FLANKPCT: "flank",
    /**
 * cancel time
 */
    LANG_PAN_SUMMARY_CANCELTIME: "cancel time",
    /**
 * res count
 */
    LANG_PAN_SUMMARY_RESCOUNT: "res count",
    /**
 * res time
 */
    LANG_PAN_SUMMARY_RESTIME: "res time",
    /**
 * down count
 */
    LANG_PAN_SUMMARY_DOWNCOUNT: "down count",
    /**
 * cleanse out
 */
    LANG_PAN_SUMMARY_CLEANSEDOUT: "cleanse out",
    /**
 * strip out
 */
    LANG_PAN_SUMMARY_STRIPPEDOUT: "strip out",
    /**
 * glance
 */
    LANG_PAN_SUMMARY_GLANCEPCT: "glance",
    /**
 * evades
 */
    LANG_PAN_SUMMARY_EVADES: "evades",
    /**
 * interrupts
 */
    LANG_PAN_SUMMARY_INTERRUPTS: "interrupts",
    /**
 * misses
 */
    LANG_PAN_SUMMARY_MISSES: "misses",
    /**
 * dodges
 */
    LANG_PAN_SUMMARY_DODGE: "dodges",
    /**
 * History
 */
    LANG_PAN_SUMMARY_HIST: "History",
    /**
 * player must be
 */
    LANG_PAN_SUMMARY_SQSHORT1: "player must be",
    /**
 * in party/squad
 */
    LANG_PAN_SUMMARY_SQSHORT2: "in party/squad",
    /**
 * cleanse in
 */
    LANG_PAN_SUMMARY_CLEANSEDIN: "cleanse in",
    /**
 * strip in
 */
    LANG_PAN_SUMMARY_STRIPPEDIN: "strip in",
    /**
 * down time
 */
    LANG_PAN_SUMMARY_DOWNTIME: "down time",
    /**
 * cancel count
 */
    LANG_PAN_SUMMARY_CANCELCOUNT: "cancel count",
    /**
 * vs shield
 */
    LANG_PAN_SUMMARY_SHIELD: "vs shield",
    /**
 * shield eff
 */
    LANG_PAN_SUMMARY_SHIELDEFF: "shield eff",
    /**
 * blocks
 */
    LANG_PAN_SUMMARY_BLOCKS: "blocks",
    /**
 * absorbs
 */
    LANG_PAN_SUMMARY_ABSORBS: "absorbs",
    /**
 * cleanse self
 */
    LANG_PAN_SUMMARY_CLEANSEDSELF: "cleanse self",
    /**
 * duration
 */
    LANG_PAN_SUMMARY_DURATION: "duration",
    /**
 * intensity
 */
    LANG_PAN_SUMMARY_INTENSITY: "intensity",
    /**
 * phys
 */
    LANG_PAN_SUMMARY_PHYS: "phys",
    /**
 * cond
 */
    LANG_PAN_SUMMARY_COND: "cond",
    /**
 * dps uptime
 */
    LANG_PAN_SUMMARY_DPSUPTIME: "dps uptime",
    /**
 * reduced
 */
    LANG_PAN_SUMMARY_PROTPCT: "reduced",
    /**
 * killed
 */
    LANG_PAN_SUMMARY_KILLINGBLOWS: "killed",
    /**
 * downed
 */
    LANG_PAN_SUMMARY_DOWNEDS: "downed",
    /**
 * vs down
 */
    LANG_PAN_SUMMARY_DOWNEDPCT: "vs down",
    /**
 * zeroes
 */
    LANG_PAN_SUMMARY_ZEROES: "zeroes",
    /**
 * death count
 */
    LANG_PAN_SUMMARY_DEATHCOUNT: "death count",
    /**
 * breakbar
 */
    LANG_PAN_SUMMARY_BREAKBAR: "breakbar",
    /* panels: logger */
    /**
 * Log
 */
    LANG_PAN_LOGGER_HEADER: "Log",
    /**
 * cbt
 */
    LANG_PAN_LOGGER_HEADER_CBT: "cbt",
    /**
 * eng
 */
    LANG_PAN_LOGGER_ENG: "eng",
    /**
 * game
 */
    LANG_PAN_LOGGER_GME: "game",
    /**
 * filter
 */
    LANG_PAN_LOGGER_FILTER: "filter",
    /**
 * res.qdep
 */
    LANG_PAN_LOGGER_RESQ: "res.qdep",
    /**
 * cbt.qdep
 */
    LANG_PAN_LOGGER_CBTQ: "cbt.qdep",
    /**
 * m.blks
 */
    LANG_PAN_LOGGER_MBLK: "m.blks",
    /**
 * m.sz
 */
    LANG_PAN_LOGGER_MSZ: "m.sz",
    /**
 * lim.ag
 */
    LANG_PAN_LOGGER_AG: "lim.ag",
    /**
 * lim.ch
 */
    LANG_PAN_LOGGER_CH: "lim.ch",
    /**
 * ces
 */
    LANG_PAN_LOGGER_CEA: "ces",
    /**
 * grc
 */
    LANG_PAN_LOGGER_GRC: "grc",
    /**
 * cbs
 */
    LANG_PAN_LOGGER_SCS: "cbs",
    /**
 * ccx
 */
    LANG_PAN_LOGGER_SCC: "ccx",
    /**
 * tgc
 */
    LANG_PAN_LOGGER_STG: "tgc",
    /**
 * scr
 */
    LANG_PAN_LOGGER_SAG: "scr",
    /**
 * rth
 */
    LANG_PAN_LOGGER_RTH: "rth",
    /**
 * ccs
 */
    LANG_PAN_LOGGER_CCS: "ccs",
    /**
 * rs
 */
    LANG_PAN_LOGGER_HS: "rs",
    /**
 * ui0
 */
    LANG_PAN_LOGGER_UI0: "ui0",
    /**
 * ui1
 */
    LANG_PAN_LOGGER_UI1: "ui1",
    /**
 * ru
 */
    LANG_PAN_LOGGER_HU: "ru",
    /**
 * Channel
 */
    LANG_PAN_LOGGER_CHANNEL: "Channel",
    /**
 * sim
 */
    LANG_PAN_LOGGER_SIM: "sim",
    /**
 * mci
 */
    LANG_PAN_LOGGER_MCI: "mci",
    /**
 * mco
 */
    LANG_PAN_LOGGER_MCO: "mco",
    /**
 * lines
 */
    LANG_PAN_LOGGER_LINES: "lines",
    /**
 * suppress logging
 */
    LANG_PAN_LOGGER_SUPPRESS: "suppress logging",
    /**
 * perf
 */
    LANG_PAN_LOGGER_PERFTIME: "perf",
    /**
 * Events
 */
    LANG_PAN_LOGGER_EVENTS: "Events",
    /**
 * statechange
 */
    LANG_PAN_LOGGER_CBTSTATECHANGE: "statechange",
    /**
 * activation
 */
    LANG_PAN_LOGGER_CBTACTIVATION: "activation",
    /**
 * buffremove
 */
    LANG_PAN_LOGGER_CBTBUFFREMOVE: "buffremove",
    /**
 * buffapply
 */
    LANG_PAN_LOGGER_CBTBUFFAPPLY: "buffapply",
    /**
 * buffdamage
 */
    LANG_PAN_LOGGER_CBTBUFFDAMAGE: "buffdamage",
    /**
 * buffheal
 */
    LANG_PAN_LOGGER_CBTBUFFHEAL: "buffheal",
    /**
 * directdamage
 */
    LANG_PAN_LOGGER_CBTDIRECTDAMAGE: "directdamage",
    /**
 * directheal
 */
    LANG_PAN_LOGGER_CBTDIRECTHEAL: "directheal",
    /**
 * Debug
 */
    LANG_PAN_LOGGER_DEBUG: "Debug",
    /**
 * minion
 */
    LANG_PAN_LOGGER_CBTMINION: "minion",
    /**
 * breakbardamage
 */
    LANG_PAN_LOGGER_CBTBREAKBARDAMAGE: "breakbardamage",
    /* panels: metrics */
    /**
 * Metrics
 */
    LANG_PAN_METRICS_HEADER: "Metrics",
    /**
 * F
 */
    LANG_PAN_METRICS_FPS: "F",
    /**
 * P
 */
    LANG_PAN_METRICS_PING: "P",
    /**
 * Map Type
 */
    LANG_PAN_METRICS_MAPTYPE: "Map Type",
    /**
 * Map ID
 */
    LANG_PAN_METRICS_MAPID: "Map ID",
    /**
 * Map Level
 */
    LANG_PAN_METRICS_MAPLV: "Map Level",
    /**
 * Build GW2
 */
    LANG_PAN_METRICS_BUILDGW: "Build GW2",
    /**
 * Build arc
 */
    LANG_PAN_METRICS_BUILDARC: "Build arc",
    /**
 * R
 */
    LANG_PAN_METRICS_TICK: "R",
    /* panels: buffs */
    /**
 * Buffs
 */
    LANG_PAN_BUFFS_HEADER: "Buffs",
    /**
 * warning: cpu heavy
 */
    LANG_PAN_BUFFS_WARNING: "warning: cpu heavy",
    /* panels: detail */
    /**
 * Detail
 */
    LANG_PAN_DETAIL_HEADER: "Detail",
    /**
 * min
 */
    LANG_PAN_DETAIL_MIN: "min",
    /**
 * max
 */
    LANG_PAN_DETAIL_MAX: "max",
    /**
 * time
 */
    LANG_PAN_DETAIL_ELAPSED: "time",
    /**
 * Agent doesn't exist
 */
    LANG_PAN_DETAIL_REMOVED: "Agent doesn't exist",
    /* panels: options */
    /**
 * Options
 */
    LANG_PAN_OPTIONS_HEADER: "Options",
    /**
 * Windows
 */
    LANG_PAN_OPTIONS_PANELS: "Windows",
    /**
 * tooltip
 */
    LANG_PAN_OPTIONS_SUMMARIES: "tooltip",
    /**
 * Interface
 */
    LANG_PAN_OPTIONS_INTERFACE: "Interface",
    /**
 * dps out
 */
    LANG_PAN_OPTIONS_SM_ADPSOUT: "dps out",
    /**
 * dps in
 */
    LANG_PAN_OPTIONS_SM_ADPSIN: "dps in",
    /**
 * buffs
 */
    LANG_PAN_OPTIONS_SM_BUFFS: "buffs",
    /**
 * cancels
 */
    LANG_PAN_OPTIONS_SM_RATES: "cancels",
    /**
 * res/downs
 */
    LANG_PAN_OPTIONS_SM_AGSTATES: "res/downs",
    /**
 * strips/cleanses
 */
    LANG_PAN_OPTIONS_SM_BUFFEVENTS: "strips/cleanses",
    /**
 * dodges
 */
    LANG_PAN_OPTIONS_SM_RESULTS: "dodges",
    /**
 * lock target to encounter NPC
 */
    LANG_PAN_OPTIONS_BS_LOCKTARGET: "lock target to encounter NPC",
    /**
 * save EVTC logs after encounters
 */
    LANG_PAN_OPTIONS_BS_SAVELOGS: "save EVTC logs after encounters",
    /**
 * use NPC name in EVTC save path
 */
    LANG_PAN_OPTIONS_BS_NPCINPATH: "use NPC name in EVTC save path",
    /**
 * compress logs with PowerShell (Win10)
 */
    LANG_PAN_OPTIONS_BS_COMPRESS: "compress logs with PowerShell (Win10)",
    /**
 * use guild in EVTC save path
 */
    LANG_PAN_OPTIONS_BS_GUILDINPATH: "use guild in EVTC save path",
    /**
 * Draw bars
 */
    LANG_PAN_OPTIONS_BS_BGBARS: "Draw bars",
    /**
 * use player name in EVTC save path
 */
    LANG_PAN_OPTIONS_BS_PLAYERINPATH: "use player name in EVTC save path",
    /**
 * moving windows requires modifiers
 */
    LANG_PAN_OPTIONS_BS_ALTUIMOVELOCK: "moving windows requires modifiers",
    /**
 * clicking requires modifiers (unsupported)
 */
    LANG_PAN_OPTIONS_BS_ALTUICLICKLOCK: "clicking requires modifiers (unsupported)",
    /**
 * Logging
 */
    LANG_PAN_OPTIONS_BS_LOGGING: "Logging",
    /**
 * hide empty buffs
 */
    LANG_PAN_OPTIONS_SM_HIDEZEROBUFFS: "hide empty buffs",
    /**
 * esc closes windows
 */
    LANG_PAN_OPTIONS_BS_FASTCLOSE: "esc closes windows",
    /**
 * Open
 */
    LANG_PAN_OPTIONS_BS_LOGS: "Open",
    /**
 * Config (open in explorer)
 */
    LANG_PAN_OPTIONS_BS_CONFIG: "Config (open in explorer)",
    /**
 * Style
 */
    LANG_PAN_OPTIONS_BS_STYLE: "Style",
    /**
 * Colours: ImGui
 */
    LANG_PAN_OPTIONS_BS_COLOURSIMGUI: "Colours: ImGui",
    /**
 * Colours: Arc
 */
    LANG_PAN_OPTIONS_BS_COLOURSARC: "Colours: Arc",
    /**
 * Colours: Arc/Profession
 */
    LANG_PAN_OPTIONS_BS_COLOURSPROF: "Colours: Arc/Profession",
    /**
 * Colours: Arc/Squad
 */
    LANG_PAN_OPTIONS_BS_COLOURSSQUAD: "Colours: Arc/Squad",
    /**
 * Appearance
 */
    LANG_PAN_OPTIONS_BS_APPEARANCE: "Appearance",
    /* common assorted out of lazy */
    /**
 * success
 */
    LANG_COMMON_AS_SUCCESS: "success",
    /**
 * failed
 */
    LANG_COMMON_AS_FAIL: "failed",
    /**
 * padding
 */
    LANG_COMMON_AS_PADDING: "padding",
    /**
 * background
 */
    LANG_COMMON_AS_BACKGROUND: "background",
    /**
 * one line
 */
    LANG_COMMON_AS_ONELINE: "one line",
    /**
 * align right
 */
    LANG_COMMON_AS_ALIGNRIGHT: "align right",
    /**
 * Reset
 */
    LANG_COMMON_AS_RESET: "Reset",
    /**
 * total
 */
    LANG_COMMON_AS_TOTAL: "total",
    /**
 * cleave
 */
    LANG_COMMON_AS_CLEAVE: "cleave",
    /**
 * target
 */
    LANG_COMMON_AS_TARGET: "target",
    /**
 * in
 */
    LANG_COMMON_AS_IN: "in",
    /**
 * title bar
 */
    LANG_COMMON_AS_TITLE: "title bar",
    /**
 * no history
 */
    LANG_COMMON_AS_NOHISTORY: "no history",
    /**
 * auto size
 */
    LANG_COMMON_AS_AUTOSIZE: "auto size",
    /**
 * max displayed
 */
    LANG_COMMON_AS_LISTLENGTH: "max displayed",
    /**
 * scroll bar
 */
    LANG_COMMON_AS_SCROLLBAR: "scroll bar",
    /**
 * friendly
 */
    // @ts-ignore
    LANG_COMMON_AS_FRIENDLY: "friendly",
    /**
 * List
 */
    LANG_COMMON_AS_LIST: "List",
    /**
 * skills
 */
    LANG_COMMON_AS_SKILLS: "skills",
    /**
 * targets
 */
    LANG_COMMON_AS_TARGETS: "targets",
    /**
 * log
 */
    LANG_COMMON_AS_LOG: "log",
    /**
 * Extras
 */
    LANG_COMMON_AS_EXTRAS: "Extras",
    /**
 * check recommended minimum version
 */
    LANG_COMMON_AS_VERSIONCHECK: "check recommended minimum version",
    /**
 * suppress objective achievements
 */
    LANG_COMMON_AS_NOOBLACH: "suppress objective achievements",
    /**
 * suppress objective quests
 */
    LANG_COMMON_AS_NOOBLQUEST: "suppress objective quests",
    /**
 * suppress floating combat text
 */
    LANG_COMMON_AS_NOCOMBATTEXT: "suppress floating combat text",
    /**
 * current
 */
    LANG_COMMON_AS_CUR: "current",
    /**
 * recommended
 */
    LANG_COMMON_AS_REC: "recommended",
    /**
 * Version Check
 */
    LANG_COMMON_AS_LOGSINVALID: "Version Check",
    /**
 * Requires map reload
 */
    LANG_COMMON_AS_MAPRELOAD: "Requires map reload",
    /**
 * suppress objective events
 */
    LANG_COMMON_AS_NOOBLEVENT: "suppress objective events",
    /**
 * Warning: results unpredictable
 */
    LANG_COMMON_AS_SLOWVATOOLTIP: "Warning: results unpredictable",
    /**
 * slow worldstep when window inactive
 */
    LANG_COMMON_AS_SLOWVA: "slow worldstep when window inactive",
    /**
 * UI/UX
 */
    LANG_COMMON_AS_OPTSEXTRASTOOLTIP: "UI/UX",
    /**
 * use per-profession keybinds
 */
    LANG_COMMON_AS_SAVEPROFKEYBINDS: "use per-profession keybinds",
    /**
 * Automatically load last keybinds on map\nenter, and save on map exit\n(binds: skills group, stow weapon)
 */
    LANG_COMMON_AS_SAVEPROFKEYBINDSTOOLTIP: "Automatically load last keybinds on map\nenter, and save on map exit\n(binds: skills group, stow weapon)",
    /**
 * combat time
 */
    LANG_COMMON_AS_COMBATTIME: "combat time",
    /**
 * sort per second
 */
    LANG_COMMON_AS_SORTDPS: "sort per second",
    /**
 * Style
 */
    LANG_COMMON_AS_STYLE: "Style",
    /**
 * buffs
 */
    LANG_COMMON_AS_BUFFS: "buffs",
    /**
 * sort vs target
 */
    LANG_COMMON_AS_SORTTARGET: "sort vs target",
    /**
 * Display
 */
    LANG_COMMON_AS_DISPLAY: "Display",
    /**
 * bar colour by subgroup
 */
    LANG_COMMON_AS_COLOURSUBGROUP: "bar colour by subgroup",
    /**
 * @1: cleave total\n@2: cleave per second\n@3: cleave percent\n@4: target total\n@5: target per second\n@6: target percent
 */
    LANG_COMMON_AS_FORMATTOOLTIP: "@1: cleave total\n@2: cleave per second\n@3: cleave percent\n@4: target total\n@5: target per second\n@6: target percent",
    /**
 * stats format
 */
    LANG_COMMON_AS_PLAYERFORMAT: "stats format",
    /**
 * debug
 */
    LANG_COMMON_AS_DEBUG: "debug",
    /**
 * Data
 */
    LANG_COMMON_AS_DATA: "Data",
    /**
 * labels
 */
    LANG_COMMON_AS_LABELS: "labels",
    /**
 * index numbers
 */
    LANG_COMMON_AS_NUMBERS: "index numbers",
    /**
 * profession
 */
    LANG_COMMON_AS_PROF: "profession",
    /**
 * top skills
 */
    LANG_COMMON_AS_TOPSKILLS: "top skills",
    /**
 * top targets
 */
    LANG_COMMON_AS_TOPTARGETS: "top targets",
    /**
 * window width
 */
    LANG_COMMON_AS_WIDTH: "window width",
    /**
 * Damage
 */
    LANG_COMMON_AS_DAMAGE: "Damage",
    /**
 * taken
 */
    LANG_COMMON_AS_TAKEN: "taken",
    /**
 * use window style for title bar
 */
    LANG_COMMON_AS_TITLEMATCHFRAME: "use window style for title bar",
    /**
 * @1: cleave per second\n@2: cleave total\n@3: target per second\n@4: target total\n@5: target name
 */
    LANG_COMMON_AS_TITLEFORMATTOOLTIP: "@1: cleave per second\n@2: cleave total\n@3: target per second\n@4: target total\n@5: target name",
    /**
 * title bar format
 */
    LANG_COMMON_AS_TITLEFORMAT: "title bar format",
    /**
 * interval
 */
    LANG_COMMON_AS_INTERVAL: "interval",
    /**
 * max name length
 */
    LANG_COMMON_AS_NAMECHARWIDTH: "max name length",
    /**
 * show advanced style options
 */
    LANG_COMMON_AS_SHOWADVANCEDSTYLEOPTS: "show advanced style options",
    /**
 * Warning: modifying ImGui style\nmay not do what you want it to do.\nThis is unsupported and no layout\ncompatibility is guaranteed
 */
    LANG_COMMON_AS_SHOWADVANCEDSTYLEOPTSINFO: "Warning: modifying ImGui style\nmay not do what you want it to do.\nThis is unsupported and no layout\ncompatibility is guaranteed",
    /**
 * Some colours are hardcoded and\ncannot be changed. Click and drag on\nboxes to edit (R G B A)
 */
    LANG_COMMON_AS_SHOWADVANCEDSTYLEOPTSCOL: "Some colours are hardcoded and\ncannot be changed. Click and drag on\nboxes to edit (R G B A)",
    /**
 * Colours
 */
    LANG_COMMON_AS_SHOWADVANCEDSTYLEOPTSPREC: "Colours",
    /**
 * name
 */
    LANG_COMMON_AS_NAME: "name",
    /**
 * name colour using profession
 */
    LANG_COMMON_AS_NAMECOLPROF: "name colour using profession",
    /**
 * name colour using subgroup
 */
    LANG_COMMON_AS_NAMECOLSUBGROUP: "name colour using subgroup",
    /**
 * sort by subgroup
 */
    LANG_COMMON_AS_SORTSUBGROUP: "sort by subgroup",
    /**
 * Mem GW2
 */
    LANG_COMMON_AS_MEMGW2: "Mem GW2",
    /**
 * Mem arc
 */
    LANG_COMMON_AS_MEMARC: "Mem arc",
    /**
 * Dist cbt
 */
    LANG_COMMON_AS_DISTCBT: "Dist cbt",
    /**
 * Dist ooc
 */
    LANG_COMMON_AS_DISTOOC: "Dist ooc",
    /**
 * Time cbt
 */
    LANG_COMMON_AS_TIMECBT: "Time cbt",
    /**
 * Time ooc
 */
    LANG_COMMON_AS_TIMEOOC: "Time ooc",
    /**
 * detailed
 */
    LANG_COMMON_AS_DETAILED: "detailed",
    /**
 * Simulation disabled
 */
    LANG_COMMON_AS_SIMDISABLED: "Simulation disabled",
    /**
 * sort advanced
 */
    LANG_COMMON_AS_SORTADV: "sort advanced",
    /**
 * Advanced sort options override default\nsort options and player format strings,\nas well as require more processing\n* = affected by exclude
 */
    LANG_COMMON_AS_SORTADVTOOLTIP: "Advanced sort options override default\nsort options and player format strings,\nas well as require more processing\n* = affected by exclude",
    /**
 * Changes to default style will\nnot retroactively apply once set
 */
    LANG_COMMON_AS_SHOWADVANCEDSTYLEOPTSTOOLTIP: "Changes to default style will\nnot retroactively apply once set",
    /**
 * history
 */
    LANG_COMMON_AS_HISTORY: "history",
    /**
 * Adv
 */
    LANG_COMMON_AS_SORTADV_ADVANCED: "Adv",
    /**
 * none
 */
    LANG_COMMON_AS_SORTADV_FNNONE: "none",
    /**
 * downeds
 */
    LANG_COMMON_AS_SORTADV_FNDOWN: "downeds",
    /**
 * time between going down
 */
    LANG_COMMON_AS_SORTADV_FNDOWNPERSIST: "time between going down",
    /**
 * deaths
 */
    LANG_COMMON_AS_SORTADV_FNDEATH: "deaths",
    /**
 * time between dying
 */
    LANG_COMMON_AS_SORTADV_FNDEATHPERSIST: "time between dying",
    /**
 * res count
 */
    LANG_COMMON_AS_SORTADV_FNRESCOUNT: "res count",
    /**
 * res time
 */
    LANG_COMMON_AS_SORTADV_FNRESTIME: "res time",
    /**
 * cleanses squad current
 */
    LANG_COMMON_AS_SORTADV_FNCLEANSE: "cleanses squad current",
    /**
 * strips squad current
 */
    LANG_COMMON_AS_SORTADV_FNSTRIP: "strips squad current",
    /**
 * dps out averaged
 */
    LANG_COMMON_AS_SORTADV_FNDPSOUTPERSIST: "dps out averaged",
    /**
 * dps in averaged
 */
    LANG_COMMON_AS_SORTADV_FNDPSINPERSIST: "dps in averaged",
    /**
 * stats exclude
 */
    LANG_COMMON_AS_STATSEXCLUDE: "stats exclude",
    /**
 * Stats exclusion
 */
    LANG_COMMON_AS_STATSEXCLUDETOOLTIP: "Stats exclusion",
    /**
 * excl
 */
    LANG_COMMON_AS_STATSEXCLUDEACTIVE: "excl",
    /**
 * vs players
 */
    LANG_COMMON_AS_STATSEXCLUDEVSPLAYER: "vs players",
    /**
 * vs npcs
 */
    LANG_COMMON_AS_STATSEXCLUDEVSNPC: "vs npcs",
    /**
 * vs gadgets
 */
    LANG_COMMON_AS_STATSEXCLUDEVSGADGET: "vs gadgets",
    /**
 * from players
 */
    LANG_COMMON_AS_STATSEXCLUDEFROMPLAYER: "from players",
    /**
 * from npcs
 */
    LANG_COMMON_AS_STATSEXCLUDEFROMNPC: "from npcs",
    /**
 * from gadgets
 */
    LANG_COMMON_AS_STATSEXCLUDEFROMGADGET: "from gadgets",
    /**
 * Interface
 */
    LANG_COMMON_AS_OPTSINTERFACETOOLTIP: "Interface",
    /**
 * Encounter logging
 */
    LANG_COMMON_AS_OPTSLOGSTOOLTIP: "Encounter logging",
    /**
 * Player tooltips
 */
    LANG_COMMON_AS_OPTSPLAYERTOOLTIP: "Player tooltips",
    /**
 * Data display
 */
    LANG_COMMON_AS_OPTSDISPLAYTOOLTIP: "Data display",
    /**
 * Window style
 */
    LANG_COMMON_AS_OPTSSTYLETOOLTIP: "Window style",
    /**
 * reset persistent now
 */
    LANG_COMMON_AS_PERSISTRESET: "reset persistent now",
    /**
 * dps out squad current
 */
    LANG_COMMON_AS_SORTADV_FNDPSOUTSQ: "dps out squad current",
    /**
 * dps in squad current
 */
    LANG_COMMON_AS_SORTADV_FNDPSINSQ: "dps in squad current",
    /**
 * always draw windows
 */
    LANG_COMMON_AS_ALWAYSSHOWWINDOWS: "always draw windows",
    /**
 * reset persistent on party join/leave
 */
    LANG_COMMON_AS_PERSISTPARTYRESET: "reset persistent on party join/leave",
    /**
 * reset persistent on prof change
 */
    LANG_COMMON_AS_PERSISTPROFRESET: "reset persistent on prof change",
    /**
 * detail default
 */
    LANG_COMMON_AS_DETAILDEFAULT: "detail default",
    /**
 * Details windows initial settings\nwhen opened from this window
 */
    LANG_COMMON_AS_DETAILDEFAULTTOOLTIP: "Details windows initial settings\nwhen opened from this window",
    /**
 * save evtc logs on squad combat
 */
    LANG_COMMON_AS_SAVEWVWLOGS: "save evtc logs on squad combat",
    /**
 * min participants for squad logs
 */
    LANG_COMMON_AS_SAVEWVWLOGSTHRESHOLDMIN: "min participants for squad logs",
    /**
 * max participants for squad logs
 */
    LANG_COMMON_AS_SAVEWVWLOGSTHRESHOLDMAX: "max participants for squad logs",
    /**
 * WvW logging
 */
    LANG_COMMON_AS_SAVEWVWLOGSTOOLTIP: "WvW logging",
    /**
 * Damage out
 */
    LANG_COMMON_AS_DMGOUT: "Damage out",
    /**
 * Damage in
 */
    LANG_COMMON_AS_DMGIN: "Damage in",
    /**
 * min player enemies for squad logs
 */
    LANG_COMMON_AS_SAVEWVWLOGSENEMYMIN: "min player enemies for squad logs",
    /**
 * Advanced
 */
    LANG_COMMON_AS_ADVANCEDFUNCOPTS: "Advanced",
    /**
 * show advanced function options
 */
    LANG_COMMON_AS_SHOWADVANCEDFUNCOPTS: "show advanced function options",
    /**
 * Changes may cause crashes\nor not play nice\nwith other applications
 */
    LANG_COMMON_AS_SHOWADVANCEDFUNCOPTSTOOLTIP: "Changes may cause crashes\nor not play nice\nwith other applications",
    /**
 * reset persistent on build change
 */
    LANG_COMMON_AS_PERSISTBUILDRESET: "reset persistent on build change",
    /**
 * combat time
 */
    LANG_COMMON_AS_OPTSTIME: "combat time",
    /**
 * Default combat duration is from combat\nstart to combat end. Change is applied\nglobally instantly, no reset
 */
    LANG_COMMON_AS_OPTSTIMETOOLTIP: "Default combat duration is from combat\nstart to combat end. Change is applied\nglobally instantly, no reset",
    /**
 * use last damage event for combat end
 */
    LANG_COMMON_AS_OPTSTIME_USEDMG: "use last damage event for combat end",
    /**
 * draw bars
 */
    LANG_COMMON_AS_DRAWBARS: "draw bars",
    /**
 * subgroup
 */
    LANG_COMMON_AS_SUBGROUP: "subgroup",
    /**
 * top subgroups
 */
    LANG_COMMON_AS_TOPSUBGROUPS: "top subgroups",
    /**
 * buffs total
 */
    LANG_COMMON_AS_BUFFTOTAL: "buffs total",
    /**
 * asset timeout ms
 */
    LANG_COMMON_AS_MAP_MAPASSETTIMEOUT: "asset timeout ms",
    /**
 * Max asset load time before pop-in\nFixes 2min WvW waypoint bug\n0 = use default
 */
    LANG_COMMON_AS_MAP_MAPASSETTIMEOUTTOOLTIP: "Max asset load time before pop-in\nFixes 2min WvW waypoint bug\n0 = use default",
    /**
 * map timeout ms
 */
    LANG_COMMON_AS_MAP_MAPTIMEOUT: "map timeout ms",
    /**
 * Max map load time before pop-in\n0 = use default
 */
    LANG_COMMON_AS_MAP_MAPTIMEOUTTOOLTIP: "Max map load time before pop-in\n0 = use default",
    /**
 * model timeout ms
 */
    LANG_COMMON_AS_MAP_MODELTIMEOUT: "model timeout ms",
    /**
 * Max model load time before pop-in\n0 = use default
 */
    LANG_COMMON_AS_MAP_MODELTIMEOUTTOOLTIP: "Max model load time before pop-in\n0 = use default",
    /**
 * Map load
 */
    LANG_COMMON_AS_MAP: "Map load",
    /**
 * combat - local
 */
    LANG_COMMON_AS_LOGCH_COMBATLOCAL: "combat - local",
    /**
 * combat - area (self)
 */
    LANG_COMMON_AS_LOGCH_COMBATAREASELF: "combat - area (self)",
    /**
 * combat - area (squad)
 */
    LANG_COMMON_AS_LOGCH_COMBATAREASQUAD: "combat - area (squad)",
    /**
 * engine
 */
    LANG_COMMON_AS_LOGCH_ENGINE: "engine",
    /**
 * hide windows during combat
 */
    LANG_COMMON_AS_HIDEINCOMBAT: "hide windows during combat",
    /**
 * Crash behavior
 */
    LANG_COMMON_AS_BEHAVIOR: "Crash behavior",
    /**
 * Needs restart
 */
    LANG_COMMON_AS_NEEDSRESTART: "Needs restart",
    /**
 * fights to keep
 */
    LANG_COMMON_AS_HISTORICAL: "fights to keep",
    /**
 * pass through crashes on game build
 */
    LANG_COMMON_AS_UEH: "pass through crashes on game build",
    /**
 * Font size
 */
    LANG_COMMON_AS_FONTSIZE: "Font size",
    /**
 * Custom font can be loaded by placing\narcdps_font.ttf in config folder.\nChanging size requires client restart
 */
    LANG_COMMON_AS_FONTSIZETOOLTIP: "Custom font can be loaded by placing\narcdps_font.ttf in config folder.\nChanging size requires client restart",
    /**
 * save logs to:
 */
    LANG_COMMON_AS_LOGSPATH: "save logs to:",
    /**
 * Logging folder
 */
    LANG_COMMON_AS_LOGSPATHTOOLTIP: "Logging folder",
    /**
 * buff table ids csv:
 */
    LANG_COMMON_AS_BUFFIDS: "buff table ids csv:",
    /**
 * apply
 */
    LANG_COMMON_AS_BUFFIDSAPPLY: "apply",
    /**
 * log boss ids csv:
 */
    LANG_COMMON_AS_BOSSIDS: "log boss ids csv:",
    /**
 * Postfix with g (eg. 23255g) for gadgets
 */
    LANG_COMMON_AS_BOSSIDSTOOLTIP: "Postfix with g (eg. 23255g) for gadgets",
    /**
 * apply
 */
    LANG_COMMON_AS_BOSSIDSAPPLY: "apply",
    /**
 * Keys
 */
    LANG_COMMON_AS_KEYS: "Keys",
    /**
 * (not set)
 */
    LANG_COMMON_AS_KEYS_UNSET: "(not set)",
    /**
 * modifier 1
 */
    LANG_COMMON_AS_KEYS_MOD1: "modifier 1",
    /**
 * modifier 2
 */
    LANG_COMMON_AS_KEYS_MOD2: "modifier 2",
    /**
 * modifier other
 */
    LANG_COMMON_AS_KEYS_MODMULTI: "modifier other",
    /**
 * hide
 */
    LANG_COMMON_AS_KEYS_HIDE: "hide",
    /**
 * options
 */
    LANG_COMMON_AS_KEYS_OPTIONS: "options",
    /**
 * area stats
 */
    LANG_COMMON_AS_KEYS_CHCLI: "area stats",
    /**
 * buffs
 */
    LANG_COMMON_AS_KEYS_BUFFS: "buffs",
    /**
 * self details
 */
    LANG_COMMON_AS_KEYS_SELF: "self details",
    /**
 * log to file
 */
    LANG_COMMON_AS_LOG_TO_FILE: "log to file",
    /**
 * dodge uptime
 */
    LANG_COMMON_AS_DODGEUPTIME: "dodge uptime",
    /**
 * strips averaged
 */
    LANG_COMMON_AS_SORTADV_FNSTRIPPERSIST: "strips averaged",
    /**
 * cleanses averaged
 */
    LANG_COMMON_AS_SORTADV_FNCLEANSEPERSIST: "cleanses averaged",
    /**
 * /s
 */
    LANG_COMMON_AS_SORTADV_UNITSPERSEC: "/s",
    /**
 * s
 */
    LANG_COMMON_AS_SORTADV_UNITSSECS: "s",
    /**
 * Position
 */
    LANG_COMMON_AS_WINDOW_POSITION: "Position",
    /**
 * Window position
 */
    LANG_COMMON_AS_WINDOW_POSITIONTOOLTIP: "Window position",
    /**
 * screen relative position
 */
    LANG_COMMON_AS_WINDOW_USE_FIXED: "screen relative position",
    /**
 * top-left
 */
    LANG_COMMON_AS_WINDOW_OFFS_POINT_TL: "top-left",
    /**
 * top-right
 */
    LANG_COMMON_AS_WINDOW_OFFS_POINT_TR: "top-right",
    /**
 * bottom-left
 */
    LANG_COMMON_AS_WINDOW_OFFS_POINT_BL: "bottom-left",
    /**
 * bottom-right
 */
    LANG_COMMON_AS_WINDOW_OFFS_POINT_BR: "bottom-right",
    /**
 * x
 */
    LANG_COMMON_AS_WINDOW_OFFS_X: "x",
    /**
 * y
 */
    LANG_COMMON_AS_WINDOW_OFFS_Y: "y",
    /**
 * window relative position
 */
    LANG_COMMON_AS_WINDOW_USE_RELATIVE: "window relative position",
    /**
 * from window name
 */
    LANG_COMMON_AS_WINDOW_RELATIVE_WINDOW: "from window name",
    /**
 * to this panel corner
 */
    LANG_COMMON_AS_WINDOW_RELATIVE_POINTATTACHTO: "to this panel corner",
    /**
 * from anchor panel corner
 */
    LANG_COMMON_AS_WINDOW_RELATIVE_POINTATTACHFROM: "from anchor panel corner",
    /**
 * Center relative positions
 */
    LANG_COMMON_AS_WINDOW_USE_SURROUND: "Center relative positions",
    /**
 * reset manual positions
 */
    LANG_COMMON_AS_WINDOW_RESETALL: "reset manual positions",
    /**
 * tts for npcs
 */
    LANG_COMMON_AS_TTS: "tts for npcs",
    /**
 * use window-specific excludes
 */
    LANG_COMMON_AS_SEPARATE_EXCLUDES: "use window-specific excludes",
    /**
 * Excludes applying to this window.\nUses extra CPU, tooltips will not be\navailable
 */
    LANG_COMMON_AS_SEPARATE_EXCLUDESTOOLTIP: "Excludes applying to this window.\nUses extra CPU, tooltips will not be\navailable",
    /**
 * Excludes applying to default
 */
    LANG_COMMON_AS_GLOBAL_EXCLUDESTOOLTIP: "Excludes applying to default",
    /**
 * tag distance averaged
 */
    LANG_COMMON_AS_SORTADV_FNDISTTOTAGPERSIST: "tag distance averaged",
    /**
 * tag distance squad current
 */
    LANG_COMMON_AS_SORTADV_FNDISTTOTAGSQ: "tag distance squad current",
    /**
 * WvW
 */
    LANG_COMMON_AS_WVW: "WvW",
    /**
 * PvE
 */
    LANG_COMMON_AS_PVE: "PvE",
    /**
 * Deselect advanced and use regular stats
 */
    LANG_COMMON_AS_SORTADVTOOLTIPNONE: "Deselect advanced and use regular stats",
    /**
 * Squad combat duration stats\nReset on squad combat enter (any nearby\nsquad member)
 */
    LANG_COMMON_AS_SORTADVTOOLTIPSQCURRENT: "Squad combat duration stats\nReset on squad combat enter (any nearby\nsquad member)",
    /**
 * Player combat duration stats\nNot reset on any event start or\ncombat enter
 */
    LANG_COMMON_AS_SORTADVTOOLTIPAVERAGED: "Player combat duration stats\nNot reset on any event start or\ncombat enter",
    /**
 * Player combat duration stats\nReset on player combat enter
 */
    LANG_COMMON_AS_SORTADVTOOLTIPPLAYER: "Player combat duration stats\nReset on player combat enter",
    /**
 * Stats persistence across map and\ncharacter changes
 */
    LANG_COMMON_AS_PERSISTTOOLTIP: "Stats persistence across map and\ncharacter changes",
    /**
 * kills out averaged
 */
    LANG_COMMON_AS_SORTADV_FNKILLSOUTPERSIST: "kills out averaged",
    /**
 * kills out squad current
 */
    LANG_COMMON_AS_SORTADV_FNKILLSOUTSQ: "kills out squad current",
    /**
 * downs out averaged
 */
    LANG_COMMON_AS_SORTADV_FNDOWNSOUTPERSIST: "downs out averaged",
    /**
 * downs out squad current
 */
    LANG_COMMON_AS_SORTADV_FNDOWNSOUTSQ: "downs out squad current",
    /**
 * highlight loading red
 */
    LANG_COMMON_AS_HIGHLIGHTLOADINGRED: "highlight loading red",
    /**
 * persist
 */
    LANG_COMMON_AS_PERSIST: "persist",
    /**
 * Sliding range not available\nfor global area stats
 */
    LANG_COMMON_AS_GLOBAL_OPTSSLIDINGTOOLTIP: "Sliding range not available\nfor global area stats",
    /**
 * Display stats for last
 */
    LANG_COMMON_AS_SEPARATE_OPTSSLIDINGTOOLTIP: "Display stats for last",
    /**
 * ms
 */
    LANG_COMMON_AS_OPTSSLIDING: "ms",
    /**
 * Appearance
 */
    LANG_COMMON_AS_OPTSAPPEARANCETOOLTIP: "Appearance",
    /**
 * also show self at top
 */
    LANG_COMMON_AS_COPYSELFTOP: "also show self at top",
    /**
 * hide self from list
 */
    LANG_COMMON_AS_HIDESELF: "hide self from list",
    /**
 * Colours: Arc/Area stats
 */
    LANG_COMMON_AS_COLOURSARCCHCLI: "Colours: Arc/Area stats",
    /**
 * Colours: Arc/Buff table
 */
    LANG_COMMON_AS_COLOURSARCBUFFS: "Colours: Arc/Buff table",
    /**
 * Colours: Arc/Lists
 */
    LANG_COMMON_AS_COLOURSARCLISTS: "Colours: Arc/Lists",
    /**
 * defensive
 */
    LANG_COMMON_AS_DEFENSIVE: "defensive",
    /**
 * draw damage graph on top
 */
    LANG_COMMON_AS_DRAWDAMAGE: "draw damage graph on top",
    /**
 * reset to default style
 */
    LANG_COMMON_AS_RESETSTYLE: "reset to default style",
    /**
 * breakbar averaged
 */
    LANG_COMMON_AS_SORTADV_FNBREAKBARPERSIST: "breakbar averaged",
    /**
 * breakbar squad current
 */
    LANG_COMMON_AS_SORTADV_FNBREAKBARSQ: "breakbar squad current",
    /**
 * extension
 */
    LANG_COMMON_AS_LOGCH_EXTENSION: "extension",
    /**
 * custom name
 */
    LANG_COMMON_AS_CUSTOMNAME: "custom name",
    /**
 * manual
 */
    LANG_COMMON_AS_MANUAL: "manual",
    /**
 * unsupported, can't use shift
 */
    LANG_COMMON_AS_CLICKMODTOOLTIP: "unsupported, can't use shift",
    /**
 * highlight ping spikes
 */
    LANG_COMMON_AS_PINGHIGHLIGHTSPIKE: "highlight ping spikes",
    /**
 * highlight map tick rate spikes
 */
    LANG_COMMON_AS_SERVERTICKHIGHLIGHTSPIKE: "highlight map tick rate spikes",
    /**
 * @1: framerate\n@2: ping\n@3: map tick rate\n@4: arc tick rate\n\\n: newline (for vertical)
 */
    LANG_COMMON_AS_METRICFORMATTOOLTIP: "@1: framerate\n@2: ping\n@3: map tick rate\n@4: arc tick rate\n\\n: newline (for vertical)",
    /**
 * metric format
 */
    LANG_COMMON_AS_METRICFORMAT: "metric format",
    /**
 * profession icons
 */
    LANG_COMMON_AS_PROFICONS: "profession icons",
    /**
 * subgroup average
 */
    LANG_COMMON_AS_SUBGROUPAVERAGE: "subgroup average",
    /**
 * max active stacks
 */
    LANG_COMMON_AS_MAXACTIVEESTACKS: "max active stacks",
    /**
 * 1 target nominal
 */
    LANG_COMMON_AS_ONETARGETNOMINAL: "1 target nominal",
    /**
 * 5 target nominal
 */
    LANG_COMMON_AS_FIVETARGETNOMINAL: "5 target nominal",
    /**
 * 10 target nominal
 */
    LANG_COMMON_AS_TENTARGETNOMINAL: "10 target nominal",
    /**
 * Custom icons can be loaded by creating\nan \"icons\" folder in config, using\nnames 001.png to 009.png and e101, e102.png\nto e902.png for elite specializations
 */
    LANG_COMMON_AS_PROFICONSTOOLTIP: "Custom icons can be loaded by creating\nan \"icons\" folder in config, using\nnames 001.png to 009.png and e101, e102.png\nto e902.png for elite specializations",
    /**
 * Errors
 */
    LANG_COMMON_AS_ERRORS: "Errors",
    /**
 * Buff IDs can be found by clicking player\nname on table and hovering over the\nbuff, ID listed at the bottom. Select \n'in' to view buffs recieved
 */
    LANG_COMMON_AS_BUFFLISTSTOOLTIP: "Buff IDs can be found by clicking player\nname on table and hovering over the\nbuff, ID listed at the bottom. Select \n'in' to view buffs recieved",
    /**
 * buff list
 */
    LANG_COMMON_AS_BUFFLIST: "buff list",
    /**
 * limit in to nominal (maximum)
 */
    LANG_COMMON_AS_LIMITNOMINALMAXIMUM: "limit in to nominal (maximum)",
    /**
 * show tabs
 */
    LANG_COMMON_AS_SHOWTABS: "show tabs",
    /**
 * out
 */
    LANG_COMMON_AS_OUT: "out",
    /**
 * limit in to nominal (minimum)
 */
    LANG_COMMON_AS_LIMITNOMINALMINIMUM: "limit in to nominal (minimum)",
    /**
 * Area Graphs
 */
    LANG_COMMON_AS_SQSTAT_TITLE: "Area Graphs",
    /**
 * dps out
 */
    LANG_COMMON_AS_SQSTAT_DPSOUT: "dps out",
    /**
 * dps in
 */
    LANG_COMMON_AS_SQSTAT_DPSIN: "dps in",
    /**
 * cleanse out
 */
    LANG_COMMON_AS_SQSTAT_CLEANSEOUT: "cleanse out",
    /**
 * cleanse in
 */
    LANG_COMMON_AS_SQSTAT_CLEANSEIN: "cleanse in",
    /**
 * strip out
 */
    LANG_COMMON_AS_SQSTAT_STRIPOUT: "strip out",
    /**
 * strip in
 */
    LANG_COMMON_AS_SQSTAT_STRIPIN: "strip in",
    /**
 * buff out
 */
    LANG_COMMON_AS_SQSTAT_BUFFOUT: "buff out",
    /**
 * buff in
 */
    LANG_COMMON_AS_SQSTAT_BUFFIN: "buff in",
    /**
 * squad rows
 */
    LANG_COMMON_AS_SQSTAT_SQUADROWS: "squad rows",
    /**
 * max
 */
    LANG_COMMON_AS_SQSTAT_MAX: "max",
    /**
 * timing
 */
    LANG_COMMON_AS_SQSTAT_TIMING: "timing",
    /**
 * Graph time options
 */
    LANG_COMMON_AS_SQSTAT_TIMINGTOOLTIP: "Graph time options",
    /**
 * graphs
 */
    LANG_COMMON_AS_KEYS_GRAPHS: "graphs",
    /**
 * WvW
 */
    LANG_COMMON_AS_DEFAULTSQUADLOGNAME: "WvW",
    /**
 * restrict total to MBs
 */
    LANG_COMMON_AS_TARGETHISTMBUSE: "restrict total to MBs",
    /**
 * History
 */
    LANG_COMMON_AS_OPTSHISTORICALTOOLTIP: "History",
    /**
 * stride ms
 */
    LANG_COMMON_AS_TIMESTRIDE: "stride ms",
    /**
 * show combat last ms
 */
    LANG_COMMON_AS_SQSTAT_LASTMS: "show combat last ms",
    /**
 * min log duration seconds
 */
    LANG_COMMON_AS_MINLOGDURATION: "min log duration seconds",
    /**
 * Hide player
 */
    LANG_COMMON_AS_SQSTAT_HIDEPLAYER: "Hide player",
    /**
 * Hide professions
 */
    LANG_COMMON_AS_SQSTAT_HIDEPROF: "Hide professions",
    /**
 * unhide all
 */
    LANG_COMMON_AS_SQSTAT_UNHIDEALL: "unhide all",
    /**
 * Too many graphs can cause\ngraphical artifacting
 */
    LANG_COMMON_AS_SQSTAT_MULTIPLEGRAPHWARNING: "Too many graphs can cause\ngraphical artifacting",
    /**
 * unknown
 */
    LANG_COMMON_AS_PROF_UNKNOWN: "unknown",
    /**
 * guardian
 */
    LANG_COMMON_AS_PROF_GUARDIAN: "guardian",
    /**
 * warrior
 */
    LANG_COMMON_AS_PROF_WARRIOR: "warrior",
    /**
 * engineer
 */
    LANG_COMMON_AS_PROF_ENGINEER: "engineer",
    /**
 * ranger
 */
    LANG_COMMON_AS_PROF_RANGER: "ranger",
    /**
 * thief
 */
    LANG_COMMON_AS_PROF_THIEF: "thief",
    /**
 * elementalist
 */
    LANG_COMMON_AS_PROF_ELEMENTALIST: "elementalist",
    /**
 * mesmer
 */
    LANG_COMMON_AS_PROF_MESMER: "mesmer",
    /**
 * necromancer
 */
    LANG_COMMON_AS_PROF_NECROMANCER: "necromancer",
    /**
 * revenant
 */
    LANG_COMMON_AS_PROF_REVENANT: "revenant",
    /**
 * pixels per segment
 */
    LANG_COMMON_AS_SQSTAT_GRANULARITY: "pixels per segment",
    /**
 * rolling
 */
    LANG_COMMON_AS_SQSTAT_ROLLING: "rolling",
    /**
 * Rolling: pt is sum for previous\nstride over stride\nNot rolling: pt is total to time\nover time
 */
    LANG_COMMON_AS_SQSTAT_ROLLINGTOOLTIP: "Rolling: pt is sum for previous\nstride over stride\nNot rolling: pt is total to time\nover time",
    /**
 * non-selected transparency
 */
    LANG_COMMON_AS_SQSTAT_NONSELECTALPHA: "non-selected transparency",
    /**
 * non-highlighted transparency
 */
    LANG_COMMON_AS_SQSTAT_NONHIGHLIGHTALPHA: "non-highlighted transparency",
    /**
 * auto select self
 */
    LANG_COMMON_AS_SQSTAT_AUTOSELECTSELF: "auto select self",
    /**
 * Select buff ID manually or from\nbuff table list
 */
    LANG_COMMON_AS_SQSTAT_BUFFSELECTTOOLTIP: "Select buff ID manually or from\nbuff table list",
    /**
 * buff select
 */
    LANG_COMMON_AS_SQSTAT_BUFFSELECT: "buff select",
    /**
 * List
 */
    LANG_COMMON_AS_SQSTAT_LIST: "List",
    /**
 * don't change selected colour
 */
    LANG_COMMON_AS_SQSTAT_HIGHLIGHTUSEPROF: "don't change selected colour",
    /**
 * use unique player colours
 */
    LANG_COMMON_AS_SQSTAT_USEPLAYERUNIQUECOLOURS: "use unique player colours",
    /**
 * Colours: Arc/Graphs
 */
    LANG_COMMON_AS_COLOURSARCGRAPHS: "Colours: Arc/Graphs",
    /**
 * selected
 */
    LANG_COMMON_AS_TIMERANGE: "selected",
    /**
 * hostile
 */
    LANG_COMMON_AS_HOSTILE: "hostile",
    /**
 * friendly
 */
    // @ts-ignore
    LANG_COMMON_AS_FRIENDLY: "friendly",
    /**
 * range
 */
    LANG_COMMON_AS_RANGE: "range",
    /**
 * buff in
 */
    LANG_COMMON_AS_BUFFIN: "buff in",
    /**
 * buff out
 */
    LANG_COMMON_AS_BUFFOUT: "buff out",
    /**
 * show hidden buffs
 */
    LANG_COMMON_AS_SHOWHIDDEN: "show hidden buffs",
    /**
 * hidden
 */
    LANG_COMMON_AS_HIDDEN: "hidden",
    /**
 * show target
 */
    LANG_COMMON_AS_SHOWTARGET: "show target",
    /**
 * dps out target
 */
    LANG_COMMON_AS_SQSTAT_DPSOUT_TARGET: "dps out target",
    /**
 * dps in target
 */
    LANG_COMMON_AS_SQSTAT_DPSIN_TARGET: "dps in target",
    /**
 * subgroup average only
 */
    LANG_COMMON_AS_SUBGROUPAVGONLY: "subgroup average only",
    /**
 * suppress all floating text
 */
    LANG_COMMON_AS_NOALLFLOATTEXT: "suppress all floating text",
    /**
 * show min/max line indicator
 */
    LANG_COMMON_AS_SHOWMINMAXINDICATOR: "show min/max line indicator",
    /**
 * percent squad participants
 */
    LANG_COMMON_AS_SAVEWVWLOGSTHRESHOLDSQUADPCT: "percent squad participants",
    /**
 * Self Cast OnActivate
 */
    LANG_COMMON_AS_CSKSELFCAST: "Self Cast OnActivate",
    /**
 * Enemy Cast OnActivate
 */
    LANG_COMMON_AS_CSKENEMYCAST: "Enemy Cast OnActivate",
    /**
 * on-activate
 */
    LANG_COMMON_AS_SUMMARYONACTIVATECOUNT: "on-activate",
    /**
 * strike
 */
    LANG_COMMON_AS_SUMMARYSTRIKETOTAL: "strike",
    /**
 * condition
 */
    LANG_COMMON_AS_SUMMARYCONDITIONTOTAL: "condition",
    /**
 * stats format pad spaces
 */
    LANG_COMMON_AS_PADSPACES: "stats format pad spaces",
    /**
 * reset on self map change
 */
    LANG_COMMON_AS_PERSISTMAPRESET: "reset on self map change",
    /**
 * downs contribution
 */
    LANG_COMMON_AS_SORTADV_FNDOWNCONTRIBPERSIST: "downs contribution",
    /**
 * downs contribution
 */
    LANG_COMMON_AS_SORTADV_FNDOWNCONTRIBSQ: "downs contribution",
    /**
 * squad stats
 */
    LANG_COMMON_AS_SQUADSTATS: "squad stats",
    /**
 * persist stats
 */
    LANG_COMMON_AS_PERSISTSTATS: "persist stats",
    /**
 * end after seconds inactive
 */
    LANG_COMMON_AS_WVWINACTIVE: "end after seconds inactive",
};
exports.lang = lang;
exports.default = lang;
//# sourceMappingURL=en.js.map