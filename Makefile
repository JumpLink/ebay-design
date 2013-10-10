NEW_LESS ?= ./stylesheet/ebay.less
RESULT_CSS ?= ./stylesheet/ebay.css
PATH := ./node_modules/.bin:./node_modules/recess/node_modules/.bin:$(PATH)

#
# CSS COMPLILE
#
all:
	# lessc ${NEW_LESS} ebay.css
	lessc --compress ${NEW_LESS} $(RESULT_CSS)