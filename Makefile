NEW_LESS ?= ./ebay.less
RESULT_CSS ?= ./ebay.css
RESULT_CSS_MIN ?= ./ebay.min.css
PATH := ./node_modules/.bin:./node_modules/recess/node_modules/.bin:$(PATH)

#
# CSS COMPLILE
#
all:
	lessc ${NEW_LESS} ebay.css
	lessc --compress ${NEW_LESS} ebay.min.css