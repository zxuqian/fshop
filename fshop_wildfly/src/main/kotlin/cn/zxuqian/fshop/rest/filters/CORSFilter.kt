package cn.zxuqian.fshop.rest.filters

import cn.zxuqian.fshop.annotations.Open
import javax.ws.rs.container.ContainerRequestContext
import javax.ws.rs.container.ContainerResponseContext
import javax.ws.rs.container.ContainerResponseFilter
import javax.ws.rs.ext.Provider

@Provider
@Open
class CORSFilter : ContainerResponseFilter {
    override fun filter(requestContext: ContainerRequestContext?, responseContext: ContainerResponseContext?) {
        responseContext!!.headers.add(
                "Access-Control-Allow-Origin", "*")
        responseContext.headers.add(
                "Access-Control-Allow-Credentials", "true")
        responseContext.headers.add(
                "Access-Control-Allow-Headers",
                "origin, content-type, accept, authorization")
        responseContext.headers.add(
                "Access-Control-Allow-Methods",
                "GET, POST, PUT, DELETE, OPTIONS, HEAD")
    }
}