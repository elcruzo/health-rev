import NIOSSL
import Fluent
import FluentMySQLDriver
import Leaf
import Vapor

// configures your application
public func configure(_ app: Application) throws {
    // uncomment to serve files from /Public folder
    // app.middleware.use(FileMiddleware(publicDirectory: app.directory.publicDirectory))

    let hostname = "localhost"
    let port = 3306
    let username = "your_username"
    let password = "your_password"
    let database = "your_database"

    // Configure the database
    app.databases.use(
        .mysql(
            hostname: hostname,
            port: port,
            username: username,
            password: password,
            database: database,
            tlsConfiguration: .makeClientConfiguration(certificateVerification: .none),
        ),
    as: .mysql
    )

    app.migrations.add(CreateTodo())

    app.views.use(.leaf)

    // register routes
    try routes(app)
}
