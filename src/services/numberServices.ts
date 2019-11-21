import numeral = require('numeral');

var getDecimalFormat = function (decimal: number) {
	var format = "";
	switch (decimal) {
		case 0:
			format = '0,0';
			break;
		case 1:
			format = "0.";
			break;
		case 2:
			format = "0.0,";
			break;
		case 3:
			format = "0.0,[00]";
			break;
		case 4:
			format = "0.0,[00]";
			break;
		default:
			format = '0,';
			break;
	}
	return format;
};

/**
 * return formated number
 * @param number number to format
 * @param decimal decimal that show
 * @param prefix symbol to show after of number
 * @param suffix symbol to show before of number
 */
export function FormatNumber(number: number, decimal?: number, prefix?: string, suffix?: string): string {
	if (!isNaN(number)) {
		if (number == -(Number.MAX_VALUE) || number == Number.MAX_VALUE) return "-";
		var decimalFormat = getDecimalFormat(decimal);
		if (number < 0 && number > -1)
			if (number < 0.01) {
				decimalFormat = getDecimalFormat(3);
			} else if (number < 0.001) {
				decimalFormat = getDecimalFormat(4);
			}
		// FYI: keep in mind that if we put "%" as a prefix, because we're sending it to format() from numeraljs, is gonna convert the number to percentual
		var valueToReturn = numeral(number).format(((prefix) ? prefix + '' : '') + decimalFormat) + ((suffix) ? ' ' + suffix : '');
		return valueToReturn;
	} else {
		return "-";
	}
};