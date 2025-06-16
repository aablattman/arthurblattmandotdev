use actix_web::{post, web, App, HttpServer, Responder};
use serde::{Deserialize, Serialize};

#[derive(Deserialize)]
struct Payload {
    message: String,
}

#[derive(Serialize)]
struct Response {
    message: String,
    input: String,
}

#[post("/ping")]
async fn ping(payload: web::Json<Payload>) -> impl Responder {
    web::Json(Response {
        message: "pong".to_string(),
        input: payload.message.clone(),
    })
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| App::new().service(ping))
        .bind(("0.0.0.0", 8000))?
        .run()
        .await
}
