from flask import Flask, render_template , jsonify

app = Flask(__name__)

# Expanded dynamic data for jobs
jobs = [
    {"title": "Software Engineer", "location": "Remote", "experience": "2+ years", "link": "#apply"},
    {"title": "UI/UX Designer", "location": "New York", "experience": "3+ years", "link": "#apply"},
    {"title": "Data Scientist", "location": "London", "experience": "4+ years", "link": "#apply"},
    {"title": "Backend Developer", "location": "San Francisco", "experience": "3+ years", "link": "#apply"},
    {"title": "Frontend Developer", "location": "Berlin", "experience": "2+ years", "link": "#apply"},
    {"title": "Machine Learning Engineer", "location": "Bangalore", "experience": "5+ years", "link": "#apply"},
    {"title": "Project Manager", "location": "Sydney", "experience": "6+ years", "link": "#apply"},
    {"title": "DevOps Engineer", "location": "Singapore", "experience": "3+ years", "link": "#apply"},
    {"title": "Business Analyst", "location": "Toronto", "experience": "4+ years", "link": "#apply"},
    {"title": "Technical Writer", "location": "Paris", "experience": "2+ years", "link": "#apply"},
]

@app.route("/")
def home():
    return render_template('home.html', jobs=jobs)

@app.route("/api/jobs")
def list_jobs():
    return jsonify(jobs)


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=4000, debug=True)
