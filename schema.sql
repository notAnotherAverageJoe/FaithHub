-- Table for Events
CREATE TABLE Events (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    date TIMESTAMP NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table for Sermons
CREATE TABLE Sermons (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    preacher VARCHAR(255),  -- Name of the person delivering the sermon
    date TIMESTAMP NOT NULL,
    description TEXT,
    media_url VARCHAR(255), -- Link to audio/video file
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table for Blog Posts
CREATE TABLE BlogPosts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    author VARCHAR(255), -- Author name
    published_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table for Prayer Requests
CREATE TABLE PrayerRequests (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255), -- Name of the person submitting the request
    email VARCHAR(255),
    message TEXT NOT NULL,
    is_approved BOOLEAN DEFAULT FALSE, -- Admin approval status
    submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table for Admin Users (for managing access to CMS)
CREATE TABLE AdminUsers (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL, -- Store hashed password
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table for Categories (for tagging blog posts and sermons)
CREATE TABLE Categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

-- Table for Blog Post Categories (many-to-many relationship)
CREATE TABLE BlogPostCategories (
    blog_post_id INT REFERENCES BlogPosts(id) ON DELETE CASCADE,
    category_id INT REFERENCES Categories(id) ON DELETE CASCADE,
    PRIMARY KEY (blog_post_id, category_id)
);

-- Table for Sermon Categories (many-to-many relationship)
CREATE TABLE SermonCategories (
    sermon_id INT REFERENCES Sermons(id) ON DELETE CASCADE,
    category_id INT REFERENCES Categories(id) ON DELETE CASCADE,
    PRIMARY KEY (sermon_id, category_id)
);
