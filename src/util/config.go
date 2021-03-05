package util

import (
	"fmt"
	"os"
	"time"

	"github.com/dechristopher/lioctad/env"
)

var (
	// Version of lio
	Version = "v0.1.1"

	// BootTime is set the instant everything comes online
	BootTime time.Time

	// DebugFlagPtr contains raw debug flags direct from STDIN
	DebugFlagPtr *string
	// DebugFlags holds all active, parsed debug flags
	DebugFlags []string
)

// IsDebugFlag returns true if a given debug flag is enabled in this instance
func IsDebugFlag(flag string) bool {
	for _, f := range DebugFlags {
		if f == flag {
			return true
		}
	}

	return false
}

// GetPort returns the configured primary HTTP port
func GetPort() string {
	return os.Getenv("PORT")
}

// GetListenPort returns the colon-formatted listen port
func GetListenPort() string {
	return fmt.Sprintf(":%s", GetPort())
}

// CorsOrigins returns the proper CORS origin configuration
// for the current environment
func CorsOrigins() string {
	if env.IsProd() {
		return "https://lioctad.org"
	}
	return "http://localhost:4444, https://dev.lioctad.org"
}
