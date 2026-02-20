package main

type Category struct {
	ID    string `json:"id"`
	Name  string `json:"name"`
	Tibetan string `json:"tibetan"`
	Icon  string `json:"icon"`
	Color string `json:"color"`
	Count int    `json:"count"`
}

type Deity struct {
	ID          string   `json:"id"`
	Name        string   `json:"name"`
	Tibetan     string   `json:"tibetan"`
	Description string   `json:"description"`
	Image       string   `json:"image"`
	Lineage     string   `json:"lineage"`
	Prayers     []Prayer `json:"prayers,omitempty"`
}

type Stanza struct {
	Tibetan   string `json:"tibetan"`
	Phonetic  string `json:"phonetic"`
	English   string `json:"english"`
}

type Prayer struct {
	ID          string   `json:"id"`
	Title       string   `json:"title"`
	Tibetan     string   `json:"tibetan"`
	Description string   `json:"description"`
	Category    string   `json:"category"`
	Duration    string   `json:"duration"`
	Lineage     string   `json:"lineage"`
	Icon        string   `json:"icon"`
	Content     []Stanza `json:"content,omitempty"`
}
