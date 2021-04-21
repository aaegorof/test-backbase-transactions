import dayjs from "dayjs";

export function isoToDayFormat(number: number) {
    return dayjs(number).format('MMM DD')
}
