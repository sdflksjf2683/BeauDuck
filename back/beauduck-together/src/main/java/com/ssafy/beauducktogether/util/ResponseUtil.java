package com.ssafy.beauducktogether.util;

import com.ssafy.beauducktogether.dto.common.response.ErrorContentDto;
import com.ssafy.beauducktogether.dto.common.response.ResponseErrorDto;
import com.ssafy.beauducktogether.dto.common.response.ResponseSuccessDto;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;

import java.time.ZonedDateTime;
import java.util.TimeZone;

@Component
public class ResponseUtil<T> {
    public ResponseSuccessDto<T> successResponse(T data) {
        ResponseSuccessDto<T> res = ResponseSuccessDto
                .<T>builder()
                .timeStamp(ZonedDateTime.now(TimeZone.getTimeZone("UTC").toZoneId()))
                .code(HttpStatus.OK.value())
                .status(HttpStatus.OK.name())
                .data(data)
                .build();
        return res;
    }

    public ResponseErrorDto<ErrorContentDto> buildErrorResponse(HttpStatus httpStatus, String message, String path) {
        ErrorContentDto errorContentDto = ErrorContentDto.builder()
                .message(message)
                .build();

        return ResponseErrorDto
                .<ErrorContentDto>builder()
                .timeStamp(ZonedDateTime.now(TimeZone.getTimeZone("UTC").toZoneId()))
                .code(httpStatus.value())
                .status(httpStatus.name())
                .path(path)
                .error(errorContentDto)
                .build();
    }

}
