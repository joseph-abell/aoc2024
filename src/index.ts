import { readFileSync } from "fs";
import day01 from "./day01";
import day02 from "./day02";
import day03 from "./day03";
import day04 from "./day04";
import day05 from "./day05";
import day06 from "./day06";
import day07 from "./day07";
import day08 from "./day08";
import day09 from "./day09";
import day10 from "./day10";
import day11 from "./day11";
import day12 from "./day12";
import day13 from "./day13";
import day14 from "./day14";
import day15 from "./day15";
import day16 from "./day16";
import day17 from "./day17";
import day18 from "./day18";
import day19 from "./day19";
import day20 from "./day20";
import day21 from "./day21";
import day22 from "./day22";
import day23 from "./day23";
import day24 from "./day24";

const day = '03' as string;

const data = readFileSync(`src/day${day}/input.txt`, 'utf-8');
const lines = data.split('\n');


switch (day) {
    case '01':
        day01(lines);
        break;
    case '02':
        day02(lines);
        break;
    case '03':
        day03(lines);
        break;
    case '04':
        day04(lines);
        break;
    case '05':
        day05(lines);
        break;
    case '06':
        day06(lines);
        break;
    case '07':
        day07(lines);
        break;
    case '08':
        day08(lines);
        break;
    case '09':
        day09(lines);
        break;
    case '10':
        day10(lines);
        break;
    case '11':
        day11(lines);
        break;
    case '12':
        day12(lines);
        break;
    case '13':
        day13(lines);
        break;
    case '14':
        day14(lines);
        break;
    case '15':
        day15(lines);
        break;
    case '16':
        day16(lines);
        break;
    case '17':
        day17(lines);
        break;
    case '18':
        day18(lines);
        break;
    case '19':
        day19(lines);
        break;
    case '20':
        day20(lines);
        break;
    case '21':
        day21(lines);
        break;
    case '22':
        day22(lines);
        break;
    case '23':
        day23(lines);
        break;
    case '24':
        day24(lines);
        break;
    default:
        console.log('Day not implemented');
        break;
}